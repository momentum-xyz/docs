---
title: Ubercontroller Tech Design | Odyssey
description: Odyssey Ubercontroller Tech Design
sidebar_label: Ubercontroller
sidebar_position: 4
---
This document provides a quick high level overview of the architecture and system behind Odyssey that we hope to be building with you. This is a living document that will be updated and expanded, so keep and eye on it!

#  Introduction
The _ubercontroller_ provides a service for real time updates of data. Any changes to the Odysseys are ‘pushed’ to all the clients/users. This is mainly used by the 3D interface to show changes in an Odyssey, as well as to keep all user positions updated. This uses a custom protocol, using a websocket connection, to efficiently transfer data. The controller also holds the authentication flow behind Odyssey

*Repository: [ubercontroller]([https://github.com/momentum-xyz/ubercontroller](https://github.com/momentum-xyz/ubercontroller))*

# Architecture 
A high level of the architecture behind the ubercontroller can be found on the figure below:

<mark>Todo: Write overview</mark>

### Universe

-> What is part of the universe?
-> What is a node?
-> What are objects
-> How is an object being stored?

### Attributes

-> What are generic object attributes?

### Database
Below you can have look at out database schema that shows how our data is organized & the relationships inside

<mark>Todo: Maybe update this schema? Maybe include new harvester tables?</mark>

![Odyssey database schema](img/db_schema.png)

### API
The _API_ provides a service to retrieve ‘bulk’ data, mainly used by the 2D interface to get information about the Odyssey which the user is currently in. This is served in a common, open format (the OpenAPI specification + Swagger for implementation) [Odyssey API documentation](https://discover.odyssey.org/api/develop/)

*Check our repo: [api]([https://github.com/momentum-xyz/ui-client](https://github.com/momentum-xyz/ui-client/tree/develop/packages/app/src/api))*

### Media Manager
<mark>Todo: Possible remove and move to its own md chapter, as this is not part of the ubercontroller</mark>

The _media manager_ serves ‘large’ files to the browsers, like images, textures, 3D assets and music.

*Check our repo: [media-manager](https://github.com/momentum-xyz/media-manager)*




