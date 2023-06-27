---
title: Front-end
description: Front-end.
sidebar_label: Front-end
sidebar_position: 2
---

### The front end - overview

The front end of the Odyssey platform, the ‘viewport’ into the metaverse, is a composition of three distinct parts. It employs the powerful Babylon.js engine, a React-based interface, and a dedicated wallet support system.

The Babylon.js engine plays a vital role as it acts as the 3D viewport into the Odyssey universe, offering immersive and dynamic experiences. Babylon.js is a high-performance, open-source real-time 3D engine built using a JavaScript library. It focuses on delivering impressive 3D graphics within a web browser using HTML5, outclassing many competitors with its robust performance and superior visual output. This engine is fundamental to creating the virtual environment and the visual elements that users interact with in the Odyssey universe.

Next, the React-based front end takes responsibility for the 2D user interface (UI). React is a popular JavaScript library known for its efficiency in building fast, scalable, and simple user interfaces. It handles all 2D renderings on top of the Babylon.js-powered 3D experience. This combination of React's 2D capabilities and Babylon.js's 3D engine creates a versatile and visually engaging platform that can handle a broad range of user interactions.

Finally, an integral part of the front-end system is the wallet support functionality. This feature enables the integration and management of various cryptocurrency wallets such as Metamask, Coinbase, Talisman, and Polkadot. It provides a secure and seamless system for transactions within the platform, allowing users to engage with the Odyssey platform's economic aspects. This trinity of Babylon.js, React, and the wallet support forms a comprehensive front end, providing users with a seamless, visually stunning, and secure experience.

Additionally, a significant advantage of Odyssey, being a browser-based metaverse, is its accessibility. It eliminates the need for any external software or clients; all a user needs is a web browser. This convenience enhances user interaction and engagement within the Odyssey platform and provides security in the form of not having to run unknown code on a local machine.


## Babylon.js 

Babylon.js, built atop a JavaScript library, is an extraordinary 3D engine revered for its real-time rendering capabilities. Its primary responsibility lies in generating stunning 3D graphics right within a web browser through HTML5. This performance-oriented engine is renowned for its robustness, managing to surpass even Unity WebGL exports in crafting immersive 3D web experiences.

At present, Babylon.js depends mainly on WebGL, the Web Graphics Library, to illustrate interactive 3D computer graphics. However, there is an anticipated shift towards WebGPU, an emerging API expected to deliver superior performance and efficiency, further augmenting Babylon.js's capabilities.
We're currently in the process of developing a REST-based API designed to empower developers to instigate events and augment functionality within the Babylon.js environment. Babylon.js functions as the main interaction hub within Odyssey, facilitating various actions such as the movement, scaling, and rotation of objects within a shared multiplayer 3D space.

In Odyssey, users can create models and environments using an array of predefined primitive objects or by uploading GLB files directly into the system. Once uploaded, these files appear in the user's library. We've opted to support GLB as it is a model format that's ideally suited for browser compatibility and lightweight enough for displaying multiple objects on screen. Moreover, it encapsulates all animations and textures within a single file, simplifying file management.

We currently extend comprehensive support for the GLB model specification, although we highly recommend using Draco compression to ensure optimal compatibility with Odyssey. It should be noted that objects aren’t just eye candy - each object can be extended via plugin functionalities to be interactive in different ways - everything from displaying text when clicked on, to displaying NFT art when interacted with.


## React.js

React, a highly acclaimed JavaScript library, serves as a cornerstone of our platform for all 2D graphical user interface (GUI) elements. It operates in concert with Babylon.js, furnishing a captivating user interface on top of the immersive 3D viewport powered by Babylon.js. This synthesis of 2D and 3D visuals creates a comprehensive and engaging user experience within our platform.

Designed for building dynamic, high-performing user interfaces, React's major strength lies in its component-based architecture. This design approach allows for the creation of reusable components, resulting in more efficient code, easier maintenance, and a consistent look and feel across the platform.
React's highly efficient diffing (reconciliation) algorithm is also worth noting. This algorithm ensures the minimal amount of DOM manipulation, resulting in smoother performance and a more responsive user interface. This, in combination with Babylon.js's 3D rendering, provides users with an effortless and smooth navigation experience, making it a joy to explore the Odyssey universe.

Moreover, we leverage MobX, a battle-tested library, in tandem with React to manage the state of our application. MobX simplifies the process of syncing the application state with the user interface, making it an ideal choice for our platform. By virtue of its reactive nature, MobX minimises the complexity of explicit state management and keeps the React components in sync with the latest application state.

In our framework, React effectively handles all the 2D aspects of our GUI. It facilitates the creation of interactive menus, buttons, dialog boxes, and other UI elements that users interact with.

In addition, an exciting aspect of our Odyssey platform is the ability to extend functionalities via plugins. We capitalise on the flexibility of React to add an interactive layer to objects, enabling users to engage with the Odyssey environment in multifaceted ways. Our vision is to continuously evolve our platform and we are enthusiastic about exploring new possibilities for integrations, not just by ourselves but also through the creativity and inventiveness of our community.
Our current set of plugins, flawlessly integrated within React, offers a rich set of features enhancing user interactivity within the Odyssey universe. One of these is the ability to display textures or pictures, which is often used by NFT artists to showcase their work in a more traditional 2d format. 

Another integration is the ability to play embedded YouTube and Twitch videos. This integration breathes life into the environment, turning them into interactive multimedia portals. It not only heightens user engagement but also provides a unique way to deliver content within the platform, creating an intersection between the 2D and 3D worlds.

Furthermore, we've designed Odyssey to foster collaboration. This feature transforms the metaverse into an interactive workspace, allowing users to engage with the 3D environment and each other in real-time. The inclusion of Miro integration, a potent collaborative tool, amplifies this functionality, providing a flexible platform for visual collaboration directly within Odyssey

Looking ahead, we are currently developing sound-based integrations, promising to add another dimension to user experience within the Odyssey universe. This advancement will introduce auditory elements into the mix, allowing users to interact with sound-emitting or reacting objects. The addition of these audio components will further contribute to a richer and more immersive experience within our platform. By consistently expanding and refining our set of plugins, we continue to enhance the interactive and immersive nature of the Odyssey environment.

## Wallet Support Systems

The final part (and equally as important as the front and back end system) - is wallet support. Wallets allow users to login, claim ownership,stake and record transactions on the blockchain. In Odyssey, we currently offer integration with four major wallets: Metamask, Coinbase, Talisman, and Polkadot, each carrying its unique features and strengths.

Metamask is a popular choice for many due to its user-friendly interface and functionality. As a browser extension, it offers seamless interaction with the Ethereum blockchain directly from the browser. Its wide acceptance and integration with a multitude of decentralised applications (dApps) make it a preferred choice for both beginners and advanced users alike.

Coinbase Wallet, another integration we offer, is backed by one of the largest and most reputable cryptocurrency exchanges in the world, Coinbase. This wallet provides a secure platform for users to manage their digital assets, interact with dApps, and engage with the decentralised web. Furthermore, Coinbase's simple and intuitive design ensures that users of all skill levels can navigate and transact with ease.

Talisman, a next-generation web3 wallet, is known for its focus on enhancing user experience and functionality. Its vision of creating a user-centric, secure, and scalable wallet aligns with our commitment to offer a seamless, immersive experience to our users. Talisman's innovative features, including wallet connection privacy and permission-based connectivity, contribute to a safer and more personalised user experience.
Polkadot, while being a blockchain protocol itself, also provides wallet functionality for its native DOT tokens. Polkadot's interoperability focus makes it unique, as it aims to enable seamless communication and transactions between different blockchains. This feature makes Polkadot wallet an attractive choice for users seeking to engage with multiple chains.

An important aspect of our platform's vision is to ensure seamless and easy integration of additional wallets. Given the fast-paced evolution of the crypto landscape, we strive to remain adaptable, accommodating new developments and trends. By fostering a flexible architecture, we aim to continually broaden our wallet support, thus providing our users with more options to manage their digital assets within the Odyssey universe.
