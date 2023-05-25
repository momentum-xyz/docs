---
title: Spawning assets
description: What good is your own world if you can't put objects into it? In this article we explain how to add default and personal assets to your Odyssey
sidebar_label: Spawning assets
sidebar_position: 3
---

In Odyssey there are two types of objects: the default primitives we put at your disposal, and your own assets. Let's see how to place them in your Odyssey. We'll start with the default primitives, because they are easier to handle.

First of all... what the heck is *spawning*? It's just a fancy term for "placing", just like *primitive* is a fancy term for "simple object".

:::info
**Spoiler alert**: You can also move, modify, and assign functions to your objects, we'll get into that in the next chapters 😉
:::

## Spawning a default objects

To get you started, we give you some default shapes (cones, cubes, spheres, etc.) that you can place in your Odyssey. To add one of these objects follow these steps:

1. Enter Creator mode
2. Click on the `+` (plus) button on the left side of your screen
3. Choose your object from the *Basic Asset Pack* or *Standard Asset Pack* tabs and click `Select`
4. Tick the `Visible in Navigation` box and assign your object a name (this will appear in the [minimap](/explore-the-features/other-features/minimap/))
5. Click on `Spawn object`

🧨 Boom! There is your object!

![Animation that shows how to spawn a default object in an Odyssey](img/asset-spawning-default.gif)

## Changing the colour of basic objects

1. After you have spawned an object from the *Basic Asset Pack* tab, click on it
2. Choose `Colour` from the toolbar
3. A colour picker will appear in the top-left corner of your screen. Drag the circle or input the HEX code of the colour you want your object to be
4. Click `Save` to confirm

![Animation that shows how to change an object's colour in Odyssey](img/colour-picker.gif)

## Spawning a custom object

There are a few more steps to place a custom object in your Odyssey. Let's go through them

1. Enter Creator mode
2. Click on the `+` (plus) button on the left side of your screen
3. Choose the *Upload Custom Object* tab on the left
4. Click on `Upload your asset` and choose your custom 3D model (it must be a **.glb** file, the lighter, the better)
5. Choose a name for your asset (as you want it to appear in the library) and click on `Add to library`
6. Select the *Custom Object Library* tab (right above the one you were on) and look for your asset
7. Click the `Select` button and ['follow the same steps as you would for a default object'](#spawning-a-default-object). Done!

<figure>

![Animation describing how to spawn a custom 3D asset in an Odyssey](img/asset-spawning-custom.gif)

<figcaption>Voxel scene artwork by Mike Judge</figcaption>
</figure>

:::tip
We put together a few resources on where to find free 3D assets, and how to convert them into the right format, in [this article](https://discover.odyssey.org/blog/quick-guide-to-3d-assets-for-your-odyssey/)
:::

:::warning
It is important to consider how complex a model is when you upload it into your Odyssey. There are two important aspects that make a model complex: **file size** and **polycount**.

**File size** is the size in megabytes of the model—remember, everyone who logs into your odyssey will need to download the model. Though you can upload models up to 50mb in size, we recommend that you keep models under 10mb for better performance. Keep in mind that model sizes add up: if you have 20 different 10mb models, visitors will need to download 200mb of information before they can enter your Odyssey!

**Polycount** is the structural complexity of the model (how many triangles it is made of). The more triangles, the more complicated it is for a browser to display the model. Anything under 100,000 triangles should be fine to use.

When looking for assets online, look for ‘game-ready’ assets that have been built with a low polycount and file size.
:::