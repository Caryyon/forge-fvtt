// Import any necessary modules or classes
// import { registerSettings } from './settings.mjs';

// When the system is initialized
Hooks.once('init', async function () {
  console.log('Forge: Out of Chaos | Initializing');

  // Register custom system settings
  // registerSettings();

  // Preload Handlebars templates
  // await preloadTemplates();

  // Register custom classes, entities, and so forth
  // console.log({ CONFIG });
  // CONFIG.Actor.documentClass = MyNewSystemActor;
  // CONFIG.Item.documentClass = MyNewSystemItem;

  // Register custom handlebars helpers if needed
});

// When the system is ready
Hooks.once('ready', function () {
  console.log('Forge: Out of Chaos | Ready to go!');
});

// Register custom entity sheets
// Actors.unregisterSheet('core', ActorSheet);
// Actors.registerSheet('mynewsystem', MyNewSystemActorSheet, { makeDefault: true });
// Items.unregisterSheet('core', ItemSheet);
// Items.registerSheet('mynewsystem', MyNewSystemItemSheet, { makeDefault: true });

// Optional: Export any functions or classes
// export { MyNewSystemActor, MyNewSystemItem };
