---
sidebar_position: 5
---
# Odyssey database

Odyssey uses a relational database to store the state of worlds and its users.

Each Odyssey node/hosting environment uses a single database to store the state of multiple worlds.


## Tables

NOTE: This list is never up to date.

TODO: Add descriptions as comments to the database schema, so this can be automatically generated and kept up to date in the database schema itself.


<table>
  <tr>
   <td><strong>Table name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>attributes
   </td>
   <td>Defines generic attributes to attach dynamic, runtime defined values to other entities.
   </td>
  </tr>
  <tr>
   <td>audio_tracks
   </td>
   <td>Metadata about an audio file, points to media-manager assets.
   </td>
  </tr>
  <tr>
   <td>aux_table
   </td>
   <td>DEPRECATED
   </td>
  </tr>
  <tr>
   <td>event_attendees
   </td>
   <td>Users that intend to attend an event.
   </td>
  </tr>
  <tr>
   <td>high_fives
   </td>
   <td>High five events between two users.
   </td>
  </tr>
  <tr>
   <td>integration_types
   </td>
   <td>The available types of dashboard integrations.
   </td>
  </tr>
  <tr>
   <td>invitations
   </td>
   <td>Inviting another user to a space.
   </td>
  </tr>
  <tr>
   <td>magic_links
   </td>
   <td>Direct/deep links to a location inside a world.
   </td>
  </tr>
  <tr>
   <td>migrations
   </td>
   <td>DEPRECATED
   </td>
  </tr>
  <tr>
   <td>networks
   </td>
   <td>Supported blockchain networks.
   </td>
  </tr>
  <tr>
   <td>node_settings
   </td>
   <td>Root node level configuration
   </td>
  </tr>
  <tr>
   <td>online_users
   </td>
   <td>The users that are currently online.
   </td>
  </tr>
  <tr>
   <td>space_attributes
   </td>
   <td>Relate a generic attribute value to a space.
   </td>
  </tr>
  <tr>
   <td>space_integration_events
   </td>
   <td>Gathering/meeting events for a space.
   </td>
  </tr>
  <tr>
   <td>space_integration_users
   </td>
   <td>Generic, per user, storage for integrations.
   </td>
  </tr>
  <tr>
   <td>space_integrations
   </td>
   <td>Generic, per space, storage for integrations.
   </td>
  </tr>
  <tr>
   <td>space_playlists
   </td>
   <td>Playlist of audio tracks for a space.
   </td>
  </tr>
  <tr>
   <td>space_types
   </td>
   <td>Types with default values for a space.
   </td>
  </tr>
  <tr>
   <td>spaces
   </td>
   <td>Generic entity inside a world.
   </td>
  </tr>
  <tr>
   <td>stats
   </td>
   <td>Storage of world level statistics.
   </td>
  </tr>
  <tr>
   <td>tiles
   </td>
   <td>Generic dashboard content blocks.
   </td>
  </tr>
  <tr>
   <td>token_rules
   </td>
   <td>Access rules using blockchain networks.
   </td>
  </tr>
  <tr>
   <td>tokens
   </td>
   <td>Blockchain tokens
   </td>
  </tr>
  <tr>
   <td>ui_types
   </td>
   <td>Space user interface types.
   </td>
  </tr>
  <tr>
   <td>url_mapping
   </td>
   <td>Resolve domain names to worlds.
   </td>
  </tr>
  <tr>
   <td>user_lkp
   </td>
   <td>Last known position of a user.
   </td>
  </tr>
  <tr>
   <td>user_membership
   </td>
   <td>Group users to delegate permissions.
   </td>
  </tr>
  <tr>
   <td>user_space_attributes
   </td>
   <td>Generic, per user and space, storage for integrations.
   </td>
  </tr>
  <tr>
   <td>user_spaces
   </td>
   <td>Members and role for a user inside a space.
   </td>
  </tr>
  <tr>
   <td>user_spaces_dynamic
   </td>
   <td>Automated membership for users inside a space.
   </td>
  </tr>
  <tr>
   <td>user_types
   </td>
   <td>Types of users.
   </td>
  </tr>
  <tr>
   <td>user_vanity
   </td>
   <td>DEPRECATED
   </td>
  </tr>
  <tr>
   <td>user_wallets
   </td>
   <td>Web3 wallets for a user.
   </td>
  </tr>
  <tr>
   <td>users
   </td>
   <td>User accounts.
   </td>
  </tr>
  <tr>
   <td>vanities
   </td>
   <td>DEPRECATED
   </td>
  </tr>
  <tr>
   <td>vibes
   </td>
   <td>Vibe events for a space.
   </td>
  </tr>
  <tr>
   <td>world_definition
   </td>
   <td>World level configuration.
   </td>
  </tr>
</table>



### Extra explanation


#### Spaces, users and permissions:

See the documentation about the [main domain model](../domain-model/).


#### Generic attributes

This provides plugins with a generic storage solution (for ‘simple’ key-value data), without the need to change the database schema. 

The _attributes_ table defines which ones are available. These can then either be linked to spaces or user _and _space (using the space_attributes or _user_spaces_attributes_ m2m through tables) to give them a value. 


#### Dashboards

A _space_type_ has an ui_type, which a space instance can override, to specify the (2d) user interface that is shown when a user interacts with it. So (currently) a ui_type represents a 2D dashboard with ‘tiles’. A column in _space_type_ defines the default tiles that are created.


#### Token gated access

Access to a space can be controlled with ‘tokens’ on a blockchain. A blockchain is monitored for changes for certain tokens and the user accounts that own these tokens are then given permissions. The _token_rules_ table defined the rules applied to a token defined in the _token_ tables. It supports different blockchain, which are defined in the _networks_ table. The permissions are regulated by the user_id column which points to a user entity which acts as a Group. The actual end user entities (which have an entry in _user_wallets_ that own the tokens) are then made a member of this user group.

