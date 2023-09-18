const db = require('./connection');
const { User, Profile, Registry, RegistryItem} = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await RegistryItem.deleteMany();

  const users = await User.insertMany([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe2@gmail.com',
      registryTitle: 'John and Jane Doe',
    },
    {
        firstName: 'Sarah',
        lastName: 'Smith',
        email: 'ssmith56@gmail.com',
        registryTitle: 'Sarah and Joe Green',
    },
    {
        firstName: 'Harry',
        lastName: 'Thomas',
        email: 'harry4thomas@gmail.com',
        registryTitle: 'Harry and Rebecca Thomas',
    },
  ]);

  console.log('users seeded');

  });

  await Registry.create({
    registryTitle: 'John and Jane Doe',
    email: 'johndoe2@gmail.com',
  });

  await RegistryItem.insertMany([
    {
    name: 'Ninja Food Processer',
    description: 'The Ninja Professional Food Processor with dough blade, makes food prep easier with its power, intelligence, and versatility. The 850-watt motor and preset programs chop veggies, shred cheese, and makes cookie dough from scratch.',
    price: 109.00,
    quantity: 1,
},
{
    name: 'Shark Navigator Lift Vaccum',
    description: 'This Shark® Lift-Away® comes with a PowerFins™ brushroll, a no-bristle system to deep-clean and pick up more in every pass (vs. original DuoClean®)—all with no hair wrap, thanks to the self-cleaning brushroll. It also includes Anti-Allergen Complete Seal Technology® with a filter to trap over 99.9% of dust and allergens inside the vacuum, keeping them out of the air you breathe.',
    price: 220.00,
    quantity: 1,
},
{
    name: 'Nespresso VertuoPlus',
    description: 'The Vertuo machine brews four cup sizes: 1.35 oz Espresso, 2.7 oz Double Espresso, 5.0 oz Gran Lungo, and 7.7 oz Coffee. Additional features include an adjustable tray, 54 oz. water reservoir, machine will automatically eject capsules after brewing; holds up to 17 use capsules.',
    price: 169.00,
    quantity: 1,
}
]);

  console.log('registry items seeded');

  process.exit();
;
