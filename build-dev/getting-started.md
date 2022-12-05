---
title: Getting started | Odyssey
sidebar_label: Getting started
sidebar_position: 1
---
# Getting Started
Welcome message... 

#  UX/UI
Our design team creates the Odyssey magic with Figma. Check out our [MVP screens & components](https://www.figma.com/file/ThjIFEkvWGdAqrsb08t5Xz/Momentum-3.0-Design-System?node-id=334%3A15178&t=siREax3Pqbkgt7vi-0)

Stay tuned for Odyssey design system ... 

# Architecture 
A high level of the architecture components behind Odyssey 
> [add as image when done](https://miro.com/app/board/uXjVOgNufyA=/?moveToWidget=3458764540273670203&cot=14)

### Frontend
The web interface consists of two main parts: a 2D interface layer that sits on top of a 3D canvas. The 2D interface is built with the  [React framework](https://reactjs.org/)  - which is a commonly used, open source, framework for web applications. The 3D interface uses the [Unity engine](https://unity.com/), a well known cross platform, proprietary game engine.

These communicate between each other and with backend services running on some hosting environment somewhere on the internet. 
*Check our repos: [ui-client](https://github.com/momentum-xyz/ui-client) ;  [unity-client](https://github.com/momentum-xyz/unity-client)*

### Controller (ubercontroller)
The _controller_ provides a service for real time updates of data. Any changes to the Odysseys are ‘pushed’ to all the clients/users. This is mainly used by the 3D interface to show changes in an Odyssey, as well as to keep all user positions updated. This uses a custom protocol, using a websocket connection, to efficiently transfer data.

### API
The _API_ provides a service to retrieve ‘bulk’ data, mainly used by the 2D interface to get information about the Odyssey which the user is currently in. This is served in a common, open format (the OpenAPI specification + Swagger for implementation) [Odyssey API](https://docs.momentum.xyz/api/develop/)

### Media Manager
The _media manager_ serves ‘large’ files to the browsers, like images, textures, 3D assets and music.

### Auth
Authentication (logging in) is done through the _identity providers_ (currently guest and polkadot web3 wallet).
Authorization ????
Permissions model????


### Blockchain network
???? Denis


### Database

