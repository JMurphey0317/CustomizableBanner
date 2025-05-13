@IsTest
public class BannerComponentControllerTest {
    @TestSetup
    static void setupTestData() {
        ContentVersion contentVer = new ContentVersion();
        contentVer.Title = 'Test Document';
        contentVer.PathOnClient = 'TestDocument.pdf';
        contentVer.VersionData = Blob.valueOf('Sample Data');
        contentVer.FirstPublishLocationId = UserInfo.getUserId();
        insert contentVer;
    }

    @IsTest
    static void testBlankContentDocumentId() {
        Test.startTest();
        String result = BannerComponentController.getContentDocumentUrl('');
        Test.stopTest();

        System.assertEquals(null, result);
    }

    @IsTest
    static void testNullContentDocumentId() {
        Test.startTest();
        String result = BannerComponentController.getContentDocumentUrl(null);
        Test.stopTest();

        System.assertEquals(null, result);
    }

    @IsTest
    static void testValidContentDocumentIdWithContentVersion() {
        ContentVersion contentVer = [SELECT ContentDocumentId FROM ContentVersion LIMIT 1];

        Test.startTest();
        String result = BannerComponentController.getContentDocumentUrl(contentVer.ContentDocumentId);
        Test.stopTest();

        System.assertNotEquals(null, result);
        System.assert(result.startsWith('/sfc/servlet.shepherd/version/download/'));
    }

    @IsTest
    static void testValidContentDocumentIdWithoutContentVersion() {
        Test.startTest();
        String result = BannerComponentController.getContentDocumentUrl('NonExistentContentDocumentId');
        Test.stopTest();

        System.assertEquals(null, result);
    }

    @IsTest
    static void testExceptionHandling() {
        Test.startTest();
        String result = BannerComponentController.getContentDocumentUrl('InvalidId');
        Test.stopTest();

        System.assertEquals(null, result);
    }
}