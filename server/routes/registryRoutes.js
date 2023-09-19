const express = require('express');
const router = express.Router();
const auth = require('../utils/auth');
const { check, validationResult } = require('express-validator');

const Registry = require('../models/registry');
const RegistryItem = require('../models/registryItem');

router.get('/', auth, async (req, res) => {
  try {

    const registry = await Registry.findOne({ user: req.user.id }).populate('items');

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    res.json(registry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.post(
  '/create',
  [
    auth,
    check('registryName', 'Title is required').notEmpty(),
    check('eventDate', 'Event date is required').notEmpty(),
  ],
  async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { registryName, eventDate } = req.body;

    try {
      const newRegistry = new Registry({
        user: req.user.id,
        registryName,
        eventDate,
      });

      await newRegistry.save();

      res.json(newRegistry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.put('/update/:id', auth, async (req, res) => {
  const { registryName, eventDate } = req.body;

  const registryFields = {};
  if (registryName) registryFields.registryName = registryName;
  if (eventDate) registryFields.eventDate = eventDate;

  try {
    let registry = await Registry.findById(req.params.id);

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    if (registry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    registry = await Registry.findByIdAndUpdate(
      req.params.id,
      { $set: registryFields },
      { new: true }
    );

    res.json(registry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    let registry = await Registry.findById(req.params.id);

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    if (registry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await RegistryItem.deleteMany({ registry: registry._id });

    await registry.remove();

    res.json({ msg: 'Registry deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;