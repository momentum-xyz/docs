---
title: Media Manager Tech Design | Odyssey
description: Odyssey Media Manager Tech Design
sidebar_label: Media Manager
sidebar_position: 4
---
This document provides a high level overview of the architecture and system behind Odyssey that we hope to be building with you. This is a living document that will be updated and expanded, so keep and eye on it!

# Introduction

The media manager is responsible for saving and processing textures and assets such as user avatars or 3d-objects.
_ubercontroller_ contains an API-endpoint that can be used to upload a texture or asset to the media manager.

*Check the repo: [Media Manager]([https://github.com/momentum-xyz/media-manager](https://github.com/momentum-xyz/media-manger))*

## Media Manager API
The media manager generates MD5 hashes when an asset has been stored successfully. 
This hash can be used when fetching media from the media manager by calling its API.

An overview of available endpoints can be found on the table below.

| Method | Endpoint               | Description                                                         |
|:-------|------------------------|---------------------------------------------------------------------|
| GET    | /health                | Receives the current status of the media manager                    |
| GET    | /ready                 | Assesses where-ether the media manager is ready to process requests |
| POST   | /render/addimage       | Stores and processes an image                                       |
| POST   | /render/addframe       | Stores and processes a texture based frame                          |
| POST   | /render/addtube        | Stores and processes a thumbnail for YouTube previews               |
| POST   | /addtrack              | Stores and processes a new music track                              |
| DELETE | /deltrack              | Deletes a music track                                               |
| POST   | /addasset              | Stores and processes a 3D-asset                                     |
| GET    | /render/get/{hash}     | Fetches an image by md5-hash                                        |
| GET    | /render/texture/{hash} | Fetches a texture by md5-hash                                       |
| GET    | /render/track/{hash}   | Fetches a music track by md5-hash                                   |
| GET    | /render/asset/{hash}   | Fetches an object by md5-hash                                       |

### Requesting assets
You can request texture based assets by calling the _GET /render/texture/{size_parameter}/{hash}_ endpoint providing the md5-hash as a path parameter. 
An extra parameter can be supplied for texture based assets, this parameter will resize the asset by using a pre-defined template.

A table of the available resize parameters can be found on the table below:

| Parameter            | Size (in bytes) |
|----------------------|-----------------|
| s0                   | 1024            |
| s1                   | 4096            |
| s2                   | 9216            |
| s3                   | 25600           |
| s4                   | 65536           |
| s5                   | 193600          |
| s6                   | 577600          |
| s7                   | 1721344         |
| s8                   | 5062500         |
| s9                   | 14745600        |

## Examples
An example diagram of how the media manager processes an uploaded asset can be found on the sequence diagram below.

```mermaid
sequenceDiagram;
    participant BE as Controller
    participant MM as Media Manager main.go
    participant IM as Media Manager images.go
    BE->>MM: /render/addimage {file}
    MM->>MM: requestsHandler.addImage()
    MM->>IM: ProcessImage()
    IM->>IM: WriteToFile()
    Note left of IM: If file saved successfilly
    IM-->>MM: md5Hash
    MM-->>BE: hashResponse
```

