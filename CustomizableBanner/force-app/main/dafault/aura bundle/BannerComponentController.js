({
    doInit: function(component, event, helper) {
        helper.setupBackwardCompatibility(component);
        
        const leftImageId = component.get("v.leftImageId");
        const rightImageId = component.get("v.rightImageId");
        
        if (leftImageId) {
            helper.fetchImageUrl(component, leftImageId, "v.leftImageUrl");
        }
        
        if (rightImageId) {
            helper.fetchImageUrl(component, rightImageId, "v.rightImageUrl");
        }
    },
    
    handleLeftImageLoad: function(component, event, helper) {
        component.set("v.leftImageLoaded", true);
        component.set("v.leftImageError", false);
        helper.checkAllLoaded(component);
    },
    
    handleRightImageLoad: function(component, event, helper) {
        component.set("v.rightImageLoaded", true);
        component.set("v.rightImageError", false);
        helper.checkAllLoaded(component);
    },
    
    handleLeftImageError: function(component, event, helper) {
        component.set("v.leftImageLoaded", false);
        component.set("v.leftImageError", true);
        console.error("Failed to load left banner image with ID: " + component.get("v.leftImageId"));
    },
    
    handleRightImageError: function(component, event, helper) {
        component.set("v.rightImageLoaded", false);
        component.set("v.rightImageError", true);
        console.error("Failed to load right banner image with ID: " + component.get("v.rightImageId"));
    }
})