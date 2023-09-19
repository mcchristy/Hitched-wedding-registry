const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Registry = require('../models/registry');
const RegistryItem = require('../models/registryItem');

router.get('/', auth, async (req, res) => {
  try {
    const registry = await Registry.findOne({ user: req.user.id });

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    res.json(registry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/create', auth, async (req, res) => {
  try {

    const existingRegistry = await Registry.findOne({ user: req.user.id });

    if (existingRegistry) {
      return res.status(400).json({ msg: 'User already has a registry' });
    }

    const newRegistry = new Registry({
      user: req.user.id,

    });

    await newRegistry.save();

    res.json(newRegistry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.put('/update/:id', auth, async (req, res) => {
  try {
    const registry = await Registry.findById(req.params.id);

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    if (registry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized to update this registry' });
    }


    await registry.save();

    res.json(registry);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const registry = await Registry.findById(req.params.id);

    if (!registry) {
      return res.status(404).json({ msg: 'Registry not found' });
    }

    if (registry.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized to delete this registry' });
    }

    await RegistryItem.deleteMany({ registry: registry._id });

    await Registry.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Registry deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
