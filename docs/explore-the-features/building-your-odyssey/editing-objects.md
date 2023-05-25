---
title: Editing Objects
description: Odyssey Creator lets you move, rotate, and scale your assets in space, exactly like you would do in a 3D editor. This page shows you how to do it.
sidebar_label: Editing Objects
sidebar_position: 4
---

Objects are no good unless you can place them exactly how you want and make them as big as you want. In this version of odyssey; we have combined the previous gizmo’s for move, scale, and rotate into one gizmo; called the universal gizmo. This section will cover how this tool works.

## Activating the Universal Gizmo

To turn on the universal gizmo; simply select an object while inside the experience creator. This will bring up a series of tools on the toolbar and display the universal gizmo.

Furthermore the second option of this new toolbar will bring forward the gizmo. 

## Moving an object

To move an object, make sure you have this object selected. Then using one of the 3 arrows (red, blue, green) click and drag to move the object in that respective direction. You can select either the arrow head or any of the strait lines of the gizmo to move the object

Furthermore; you can also move an object with the inspector panel; simply select the inspector panel icon from the toolbar. This will bring up the inspector panel. From here you can manually enter a numerical value for the X, y and Z coordinates and can move your object like this as well.

## Scaling an object

To scale an object, make sure you have this object selected. Then using one of the 3 cubes along the lines (red, blue, green) click and drag to scale the in that respective axis. Do you want to scale the object uniformly (equally in all directions) you can use the while ball in the middle; simply click inside the ball and drag up to scale the object bigger; and down to scale it smaller.

Furthermore; you can also scale an object with the inspector panel; simply select the inspector panel icon from the toolbar. This will bring up the inspector panel. From here you can manually enter a numerical value for all axis scales and scale your object like this as well.  

## Rotating an object

To rotate an object, make sure you have this object selected. Then using one of the 3 circles along the curved lines (red, blue, green) click and drag to rotate the object in that respective direction. 

Furthermore; you can also rotate an object with the inspector panel; simply select the inspector panel icon from the toolbar. This will bring up the inspector panel. From here you can manually enter a numerical value for all axis rotation values and rotate your object like this as well. 


:::warning
Currently babylon.js does not support the scaling of an object along one rotational axis and then using the gizmo to rotate an object. One possible work around for this is to scale your object and then rotate it with the inspector panel; or to rotate your object first; and then to scale it. 
:::