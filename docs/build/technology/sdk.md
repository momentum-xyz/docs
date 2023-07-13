---
title: SDKs
description: SDKs.
sidebar_label: SDKs
sidebar_position: 2
---

### Odyssey SDKs

We currently have two SDKs availible for Odyssey - written in node.js and python. Our backend SDKs are a set of software development kits that have been designed to provide developers with a structured, reliable, and secure interface for interacting with the Odyssey backend environment. 

## User Modes: The Gateway to Odyssey

The Odyssey SDKs allow interaction with the backend environment in two distinct modes, each tailored to cater to a different set of needs and access levels.

*Guest User Mode*: In its default configuration, the SDK facilitates interaction with the Odyssey environment in the capacity of a guest user. This mode, while being more limited than its authenticated counterpart, allows for a range of actions to be performed. Users can move around, indulge in social interactions like giving high-fives, move around and explore various areas.

*Authenticated User Mode*: For developers seeking a deeper level of interaction and control, the SDK offers the capability to connect as an authenticated user. In this enhanced mode, a user can manipulate objects within the Odyssey environment, creating a more personalised and engaging experience. To establish this authentication, the SDK needs the private key from the user's wallet account.

## Prioritising Security

Given the sensitive nature of private keys, Odyssey places a strong emphasis on security. Disclosing a private key could potentially lead to the compromise of a wallet account, hence it is advised to handle this key with the utmost care.

For better security, Odyssey recommends storing this key as an environmental variable, minimising the chance of unintentional exposure. As an added layer of security, users can also consider setting up a 'throwaway' account to further protect their main account from any potential mishaps or losses.

However, it's important to note that the method of disclosing the private key might vary across different wallets.


## Object Manipulation: The Key to Personalised Experiences

The Odyssey Backend SDKs have been engineered to allow users to add, remove, and manipulate objects within an Odyssey. This opens up a world of possibilities for customization and personalization, allowing developers to create Odyssey environments that are truly unique and engaging.

By running the SDK locally, a bot can be deployed, giving users full, round-the-clock control of their Odyssey environment. This can result in more dynamic and interactive environments that continue to evolve and engage users.

## Available SDKs: Diverse Languages for Diverse Developers

Odyssey Backend SDKs are currently available in two programming languages:

**Node**.js: A popular choice for developers specialising in server-side and networking applications. You can find it here: https://github.com/momentum-xyz/bot-sdk-nodejs 

**Python**: Known for its simplicity and versatility, Python is a favourite among both beginners and seasoned developers. You can find it here: 
https://github.com/momentum-xyz/python-client 


These different offerings ensure that developers of varying backgrounds and expertise can leverage the power of Odyssey SDKs. This facilitates a broader scope of creativity, innovation, and functionality within the Odyssey environments, making it easier for developers to automate and control their unique virtual landscapes.


