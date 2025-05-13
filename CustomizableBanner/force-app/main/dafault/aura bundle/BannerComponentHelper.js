({
    setupBackwardCompatibility: function(component) {
        const mappings = [
            { legacyAttr: "v.imageLeft", newAttr: "v.leftImageId" },
            { legacyAttr: "v.imageRight", newAttr: "v.rightImageId" },
            { legacyAttr: "v.richText", newAttr: "v.richTextContent" },
        ];

        mappings.forEach(mapping => {
            const legacyValue = component.get(mapping.legacyAttr);
            if (legacyValue && !component.get(mapping.newAttr)) {
                component.set(mapping.newAttr, legacyValue);
            }
        });

        ["Width", "Height"].forEach(dim => {
            const legacyDim = component.get(`v.image${dim}`);
            if (legacyDim && legacyDim !== "default") {
                ["leftImage", "rightImage"].forEach(image => {
                    const imageDim = component.get(`v.${image}${dim}`);
                    if (!imageDim || imageDim === "default") {
                        component.set(`v.${image}${dim}`, legacyDim);
                    }
                });
            }
        });
    },

    fetchImageUrl: function(component, imageId, targetAttribute) {
        const action = component.get("c.getContentDocumentUrl");
        action.setParams({ contentDocumentId: imageId });

        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const url = response.getReturnValue();
                if (url) {
                    component.set(targetAttribute, url);
                } else {
                    console.error(`No URL returned for content document ID: ${imageId}`);
                }
            } else {
                console.error(`Error fetching image URL for ID: ${imageId}`);
            }
        });

        $A.enqueueAction(action);
    }
});