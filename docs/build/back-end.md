---
title: Back-end
description: Back-end.
sidebar_label: Back-end
sidebar_position: 3
---

### The back end - overview


Our Odyssey platform's back end consists of a combination of different systems working in harmony, breathing life into the front end and ensuring seamless user experience. Each component of the back end fulfils a unique function, yet they all interconnect, fostering optimal efficiency and the platform's overall functionality.

The most vital component is PosBus, our custom-built solution specifically designed for real-time communication. PosBus serves as the nerve centre for immediate interactions, allowing users to communicate, interact with the environment, and see changes in real time. It is this component that almost acts as the ‘heartbeat’ for the entire Odyssey stack, ensuring that all connected clients are kept up to date with any changes that occur within the Odyssey stack.
Supplementing PosBus, we have a traditional REST API to cater to the information that doesn't need to be real time. This API provides a stable and reliable conduit for data exchange between the client and server. It fetches essential data, updates resources, and handles requests that aren't time-sensitive, ensuring the smooth operation of the platform.

Next in line are the World Controller and the User Controller, both crucial components responsible for the level data, objects, skyboxes, and user actions within Odyssey. The World Controller handles all the elements in an Odyssey world, from the objects that populate it to the skyboxes that frame it. The User Controller, on the other hand, manages all user interactions and activities within this world. These two components work closely together, ensuring optimal efficiency and providing a fluid, immersive user experience.

Our back-end system also incorporates Object Storage and a database for long-term information storage. Object Storage is a dedicated space for all Odyssey assets, including 3D models, textures, and skyboxes. It is the vault where all the visual elements (and in future audio elements) that enrich the Odyssey universe are stored. The database serves as a long-term repository for user information, platform data, and other essential details. This combination of dynamic real-time communication and reliable data management systems creates a robust back-end architecture, critical to the seamless operation of our Odyssey platform.

It must be noted that all backend components share a core principle that underpins the design and architecture of all our systems - the focus on expandability and scalability. This principle forms the fundamental premise of our approach to the Odyssey platform. It is a strategic decision that shapes our architectural blueprints, ensuring that every component, from the real-time communication facilitated by PosBus to the comprehensive asset management of Object Storage, is built to accommodate changes and future expansions.

Consider the Harvester, the system responsible for listening to, processing, and triggering actions based on blockchain activity. We have designed this with a view to accommodate integration with additional blockchains. As the landscape of blockchain technology continues to evolve, diversify and expand, our system is poised to adapt and assimilate these advancements, positioning Odyssey at the leading edge of this evolution.

Our approach towards expandability also extends to our Object Storage system. For instance, we're looking into implementing the InterPlanetary File System (IPFS), a protocol designed to create a permanent and decentralised method of storing and sharing files. The potential incorporation of such a feature would fundamentally reshape our asset handling, making our platform more resilient, distributed and future-proof.

Our guiding philosophy, the central tenet that forms the backbone of our approach to system design and code development, is a deep commitment to flexibility and foresight. We understand that the digital world is in a state of constant flux, perpetually evolving. So we strive to create a platform that is not just responsive to the needs of today but is also prepared for the demands of tomorrow. We aim to build systems that can adapt and evolve, making them as flexible and expandable as possible to integrate new technologies, functionalities, and user needs. Our code philosophy is about embracing change, anticipating it, and building a platform that is agile, resilient and always ready for the future.

## PosBus

At the heart of the Odyssey platform lies PosBus, an incredibly high performance real-time communication system that forms the backbone of all real-time information exchange within the platform. Utilising WebSockets with a custom binary protocol, PosBus ensures a fast, reliable, and real-time flow of data. It operates seamlessly, empowering users with the capability to interact and experience changes as they occur within the Odyssey environment.

One of the primary functions of PosBus is to handle the real-time updating of user positions within the Odyssey environment. Every movement taken by users is instantly communicated to all other users. We’ve scaled this system and can support thousands of users sharing the same Odyssey.  

Beyond user positions, PosBus is also responsible for communicating real-time changes within the Odyssey environment. Any alterations, additions, or transformations within the Odyssey universe are instantly relayed to all connected users. PosBus ensures that every user, regardless of their location or actions, has a coherent and up-to-date view of the Odyssey they are in. Even as a user changes or alters a shape, every action can be viewed.

Furthermore, PosBus facilitates real-time communication of events between connected clients. This feature enables users to interact not just with the environment but also with each other in real time. For instance, the ‘high-5’ event is a great example of a user to user interaction via PosBus.

## Rest API

Our REST API is a fairly traditional endpoint  in our architecture, hosting all information that doesn't necessitate real-time access. It forms an integral part of the data flow within the Odyssey platform, providing a reliable channel for non-immediate data exchanges between the client and the server.

The role it fulfils is pivotal, as it shoulders the responsibility for managing all non-real-time data, ensuring optimal use of resources. By separating real-time and non-real-time data management, the REST API significantly contributes to the efficient functioning and responsiveness of our platform. This division of labour between PosBus and the REST API allows for streamlined operations and ensures that Odyssey remains a high-performance metaverse.

## Harvester

The Harvester is a remarkably dynamic component of the Odyssey platform, with capabilities extending beyond just a single blockchain. Currently, it's proficient in working with Ethereum and Arbitrum, two prominent blockchains widely adopted for their smart contract functionalities. The Harvester acts as a direct link between Odyssey and the blockchain, continuously monitoring and interpreting blockchain transactions. By staying attuned to the pulse of the blockchain, it keeps the Odyssey platform synchronised and updated with the latest blockchain events.

As a blockchain listener, the Harvester is programmed to identify and register relevant transactions. This real-time tracking ensures that Odyssey is immediately aware of any blockchain events that affect its operation or its users. For instance, it might register the transfer of tokens, the minting of a new NFT, or the implementation of a smart contract.

Furthermore, the Harvester takes the crucial responsibility of processing the data it collects. Not only does it pick up on these transactions, but it also interprets them, translating the raw blockchain data into meaningful information that the Odyssey platform can understand and utilise. This process can involve unpacking complex transactions, verifying their authenticity, and preparing the data for further use within the platform.

What truly sets the Harvester apart, however, is its ability to extend its functionality through the use of adapters. These are specialised modules that allow the Harvester to interpret and interact with different types of blockchains. By developing and implementing these adapters, the Harvester's reach can be extended to encompass a variety of blockchain ecosystems, enhancing Odyssey's ability to integrate with a multitude of decentralised networks.

One key example of this capability is our existing adapter for Polkadot and Kusama. These are two interconnected multi-chain platforms designed for scalability, interoperability, and security. By creating an adapter for Polkadot and Kusama, the Harvester can tap into these innovative networks, enabling Odyssey to interact with a diverse range of blockchain projects and digital assets.

Finally, the Harvester can trigger actions based on the transactions it processes. Depending on the nature of the transaction and the specific protocols of the Odyssey platform, it can initiate a wide range of actions in response to the blockchain events it monitors. This might include updating a user's balance, recording a change in ownership of an NFT, or initiating a new contract. As such, the Harvester forms a dynamic and responsive bridge between the blockchain and the Odyssey metaverse, ensuring seamless integration of blockchain technology into the platform's operations.

## World Controller

The World Controller knows everything about what is inside an Odyssey - all objects, their positions, scales and orientations. It is also aware of any integrations which have been associated with objects. Additionally it is aware of the skybox which has been selected for the Odyssey. When a user enters an Odyssey via their web browser, this information is relayed to the client via PosBus - and PosBus relays changes to the world in real time to the World Controller - assuring everything remains in sync. 

## User Controller

The User Controller is closely related to the World Controller - they often work together as a user explores Odyssey. Everything that a user can do (from movement, to highfives, to updating profile information) passes through the User Controller, which makes sure that all information is relayed to all clients, as well as storing long term information into the database.


## Object Storage

Everything within Odyssey, every object, from the models to textures and immersive skyboxes, owes its existence to Object Storage. Object Storage acts as a warehouse for all these elements, housing the extensive array of assets that bring an Odyssey to life. Its role is central to the creation and rendering of the world.

The process of incorporating an asset into Odyssey is highly streamlined and efficient. When an asset is uploaded, the system performs a checksum on the file. This checksum function generates a unique hash value for each file, this aids in de-duplication as well as assuring that every asset has a unique ‘home’. In doing so, it provides a reliable, constant point of reference for each uploaded file. As such, the Odyssey system can quickly and accurately locate and retrieve these assets as.



