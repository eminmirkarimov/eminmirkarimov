// Emin Mirkarimov Genius - Adobe After Effects Master Cinema Rig (.jsx)
// Run via File -> Scripts -> Run Script File...
(function createEminGeniusCinemaRig() {
    app.beginUndoGroup("Emin Mirkarimov Genius Cinema Rig");
    var comp = app.project.items.addComp("Emin_Genius_Master_Comp", 3840, 2160, 1.0, 10.0, 24);
    comp.motionBlur = true;
    comp.shutterAngle = 180;

    // 1. Deep Obsidian Background (#090A0C)
    var bg = comp.layers.addSolid([9/255, 10/255, 12/255], "Dark_Room_Obsidian_BG", 3840, 2160, 1.0);
    bg.threeDLayer = true;
    bg.position.setValue([1920, 1080, 800]);

    // 2. Hero Typography Layer with Inertial Spring Physics
    var titleLayer = comp.layers.addText("EMIN MIRKARIMOV GENIUS");
    titleLayer.threeDLayer = true;
    titleLayer.motionBlur = true;
    var posProp = titleLayer.property("Position");
    posProp.setValueAtTime(0.0, [1920, 1300, 0]);
    posProp.setValueAtTime(0.75, [1920, 1080, 0]);
    posProp.expression = "var amp = 0.055; var freq = 2.2; var decay = 5.0; var n = 0; if (numKeys > 0) { n = nearestKey(time).index; if (key(n).time > time) n--; } if (n == 0) { value; } else { var t = time - key(n).time; var v = velocityAtTime(key(n).time - thisComp.frameDuration/10); value + v * amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t); }";

    // 3. Hollywood 3-Point Cinema Lighting (Warm Key 3200K + Cool Rim 5600K)
    var keyLight = comp.layers.addLight("Deakins_Warm_Book_Key", [1200, 700]);
    keyLight.lightType = LightType.SPOT;
    keyLight.property("Intensity").setValue(135);
    keyLight.property("Color").setValue([1.0, 0.91, 0.80]);
    keyLight.property("Position").setValue([1100, 650, -900]);

    var rimLight = comp.layers.addLight("Fraser_Cyan_Rim_Kicker", [2600, 500]);
    rimLight.lightType = LightType.POINT;
    rimLight.property("Intensity").setValue(85);
    rimLight.property("Color").setValue([0.75, 0.90, 1.0]);
    rimLight.property("Position").setValue([2700, 400, 300]);

    // 4. 50mm Cinema Camera with Subtle Push-In
    var cam = comp.layers.addCamera("ARRI_50mm_Cinema_Cam", [1920, 1080]);
    cam.property("Position").setValueAtTime(0.0, [1920, 1080, -2666]);
    cam.property("Position").setValueAtTime(10.0, [1920, 1080, -2350]);

    comp.openInViewer();
    app.endUndoGroup();
})();
