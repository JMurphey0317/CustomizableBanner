public with sharing class BannerComponentController {
    @AuraEnabled
    public static String getContentDocumentUrl(String contentDocumentId) {
        if (String.isBlank(contentDocumentId)) {
            System.debug('No contentDocumentId provided');
            return null;
        }

        try {
            ContentVersion version = [
                SELECT Id, ContentDocumentId, VersionData, Title, FileExtension
                FROM ContentVersion
                WHERE ContentDocumentId = :contentDocumentId
                ORDER BY VersionNumber DESC
                LIMIT 1
            ];

            if (version != null) {
                return '/sfc/servlet.shepherd/version/download/' + version.Id;
            } else {
                System.debug('No ContentVersion found for ContentDocumentId: ' + contentDocumentId);
                return null;
            }
        } catch (Exception e) {
            System.debug('Error in getContentDocumentUrl: ' + e.getMessage());
            return null;
        }
    }
}