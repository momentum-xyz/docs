---
title: Database Tech Design | Odyssey
description: Odyssey Database Tech Design
sidebar_label: Database
sidebar_position: 6
---


# Introduction
Odyssey uses a relational PostgreSQL database to store the state of Odysseys and its users.
Each Odyssey node/hosting environment uses a single database to store the state of multiple Odysseys.

## Tables
The _momentum4_ database contains multiple database tabels and their associated relationships.
An overview of all the tables and their relations can be found on the schema below:

![Odyssey database schema](img/db_schema.png)

An overview of tables and their definitions can be found on the table below: 

| Table                                | Description                                                        |
|--------------------------------------|--------------------------------------------------------------------|
| InvisibleObjectVisibleType _(0b00)_  | Should not be visible in React and Unity                           |
| ReactObjectVisibleType _(0b01)_      | Should only be visible in React (i.e in the Explorer)              |
| UnityObjectVisibleType _(0b10)_      | Should only be visible in Unity (i.e the skybox)                   |
| ReactUnityObjectVisibleType _(0b11)_ | Should both be visible in React and Unity (i.e a common 3d object) |

<mark>Todo: How much of below is still relevant</mark>

### Objects, users and permissions:
See the documentation about the [main domain model](../domain-model/).

### Dashboards
A _object_type_ has an ui_type, which a object instance can override, to specify the (2d) user interface that is shown when a user interacts with it. So (currently) an ui_type represents a 2D dashboard with ‘tiles’. A column in _object_type_ defines the default tiles that are created.

### Token gated access
Access to a object can be controlled with ‘tokens’ on a blockchain. A blockchain is monitored for changes for certain tokens and the user accounts that own these tokens are then given permissions. The _token_rules_ table defined the rules applied to a token defined in the _token_ tables. It supports different blockchain, which are defined in the _networks_ table. The permissions are regulated by the user_id column which points to a user entity which acts as a Group. The actual end user entities (which have an entry in _user_wallets_ that own the tokens) are then made a member of this user group.