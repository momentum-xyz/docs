---
title: A quick guide to 3D assets for your Odyssey
description: In this article we will explore the characteristics that custom 3D objects should have to perform best in your Odyssey, how to convert them them in the right format, and where to get cool free assets.
slug: quick-guide-to-3d-assets-for-your-odyssey
authors: azanutto
tags: [odyssey, 3d assets, tutorials]
hide_table_of_contents: false
---

# A quick guide to 3D assets for your Odyssey

One of the coolest things about building your own Odyssey is the ability to place your custom objects. We realise that not everybody is familiar with working with 3d assets, but everyone should be able to make their Odyssey just the way they envision it.

In this article we'll go through some tips and tricks that will show you:

- Where to find cool, open-source 3d assets to use in your Odyssey
- How to convert 3d object in the right format (GLB)
- Useful resources if you want to get started with 3D modelling

Let's dive right in.

![Gif of a person belly-diving from a trampolin](https://media.giphy.com/media/KmlTchPoFQT84/giphy.gif)

## Finding cool and open-source 3D assets

Don't know how to model 3D objects? No problem! There is a ton of free stuff out there, and in this case "free" definitely doesn't mean "horrible quality".

This is a non-exhaustive list of websites that offer free and open-source objects.

:::info
Odyssey supports `.glb` files only, so we advise you to look for assets in that format, or in `.obj`, which is easy to convert as we show in [this](#converting-your-assets-to-glb) section of the article.
:::

### OpenGameArt.Org

[OpenGameArt.Org](https://opengameart.org/) is a go-to website for 3D objects (and also 2D, sound, etc.) that are open-source and game ready. "Game ready" is an important thing here, as it means that they are optimised to both look good and be kind on your computing resources.

To start browsing through what OpenGameArt.Org has to offer, you can visit their [3D art](https://opengameart.org/art-search-advanced?keys=&field_art_type_tid%5B%5D=10&sort_by=count&sort_order=DESC) page. Use the left panel to refine your search, you can even filter by licence if you know which one you want.

When you have found the object you are looking for, if you click on the preview image it will tell you the format of the asset. Remember: `.glb`, or `.obj` are the best!

### Sketchfab

[Sketchfab](https://sketchfab.com/) is a commercial website, but they accept open-source submissions, [which are tagged as such](https://sketchfab.com/tags/open-source). Due to the hybrid nature of the website, make sure you triple-check the licence of each model.

To view the download format, click on `More model information` in the model's page.

### Open3DModel

[Open3DModel](https://open3dmodel.com/) is the last entry in this list, and a huge archive of free 3d assets. They have a filtering option that will allow you to [browse .obj objects](https://open3dmodel.com/3d-models/obj)

## Converting your .obj assets to .glb

We mentioned that `.obj` files are the easiest to convert to `.glb`, let's see how it's done with a free online conversion tool.

First things first: an `.obj` 3d object is made up of three files:
 
- The object file itself (.obj)
- The material (.mtl)
- The palette (an image file like .png, or .jpg)

**You will need all three files for a successful conversion**

### Convert your .obj object with Aspose

Aspose offers a free conversion tool that works like a charm:

1. Go to [https://products.aspose.app/3d/conversion/obj-to-glb](https://products.aspose.app/3d/conversion/obj-to-glb)
2. Drop **all three files** in the box
3. Click `Convert now` and wait a bit...
4. Click `Download now`
5. Test that your object works by dropping it here [https://gltf-viewer.donmccurdy.com/](https://gltf-viewer.donmccurdy.com/)

Awesome now you are ready to [spawn your custom asset in your odyssey](https://discover.odyssey.org/explore-the-features/odyssey-creator/spawning-assets/#spawning-a-custom-object)

## Getting started with 3D modelling

Creating objects in 3D is an intriguing experience, and an awesome skill to have. Needless to say, it's hard work, and it takes a lot of studying and fiddling around. Luckily, there are many free and open-source 3D editors and great communities that can teach you how to use them.

### Blender

[Blender](https://www.blender.org/) is the state-of-the-art when it comes to open-source 3D modelling (and commercial too, in some respects). This software is a powerhouse and has quite a steep learning curve, but the possibilities are literally endless.

If you would like to learn Blender, there are a few YouTube channels that have excellent tutorials for free:

- [CG Cookie](https://www.youtube.com/playlist?list=PL3GeP3YLZn5ixsnIOIx9tB4v6s-rsw48X)
- [Blender Guru](https://www.youtube.com/watch?v=nIoXOplUvAw&list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD)
- [Grant Abbitt](https://www.youtube.com/@grabbitt/playlists)

### MagicaVoxel

Who doesn't love voxel art? It's fun and a staple of web3. [MagicaVoxel](https://www.voxelmade.com/magicavoxel/) is a free software (though not open-source) that allows you to easily create your own voxel models.

Learning voxel is a lot easier than full-blown 3D modelling, so if you are completely new, maybe you should start from here. Here are a few good resources:

- [Pedro Casavecchia](https://www.youtube.com/playlist?list=PLyZDKlVOJ6PD-5sEIx1bo09RnIiaTxbKi)
- [Alex Voxel](https://www.youtube.com/playlist?list=PL3CE19eBHSkE1G6xLAtlPMT-adTZ01rHD)
- [MangoVoxel](https://www.youtube.com/playlist?list=PLBs294HGsDObe6tEsm3qh8gSod0qtDl7b)

## Final thoughts

We hope this quick guide is useful to get your Odyssey looking just the way you want. Don't forget check out the [docs](https://discover.odyssey.org/) for guides on all the tool available in Odyssey, and feel free to [drop us a line](https://discover.odyssey.org/get-in-touch/) if you have any feedback or feature request. We can't wait to be part of your journey!

:::tip
Always read the licence before using a 3D asset. Also, even if an asset doesn't require attribution, it's good etiquette to mention the artist, or at least give them a shoutout on their preferred social media channel. Finally, if they have a donation link, consider supporting their work that way, if you can.
:::