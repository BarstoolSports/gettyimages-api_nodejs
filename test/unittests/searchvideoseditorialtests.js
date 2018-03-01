import Api from "../../gettyimages-api";
import nock from "nock";
import test from "ava";

test.beforeEach(t=>{
    nock("https://api.gettyimages.com")
            .post("/oauth2/token", "client_id=apikey&client_secret=apisecret&grant_type=client_credentials")
            .reply(200, {
                access_token: "client_credentials_access_token",
                token_type: "Bearer",
                expires_in: "1800"
            })
            .get("/v3/search/videos/editorial")
            .query({ "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "age_of_people": ["adult", "newborn", "0-1_months", "12-17_months", "mature_adult"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "collection_codes": ["WRI", "ARF"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "collections_filter_type": "exclude", "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "editorial_video_types": "raw", "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "entity_uris": ["123", "456"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "exclude_nudity": "true", "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "fields": ["asset_family", "id"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "format_available": "hd", "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "frame_rates": ["24", "29.97"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "keyword_ids": [1234, 5678].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "page": 3, "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "page_size": 50, "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "product_types": ["easyaccess", "editorialsubscription"].join(","), "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "sort_order": "newest", "phrase": "cat" })
            .reply(200, {})
            .get("/v3/search/videos/editorial")
            .query({ "specific_people": "reggie jackson", "phrase": "cat" })
            .reply(200, {});
});

test.cb("SearchVideosEditorial: withPhrase will include phrase in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withAgeOfPeople will include age_of_people in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withAgeOfPeople(["adult", "newborn", "0-1_months"]).withAgeOfPeople(["12-17_months", "mature_adult"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withCollectionCode will include codes in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withCollectionCode(["WRI", "ARF"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withCollectionsFilterType will include collections_filter_type in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withCollectionsFilterType("exclude").execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withEditorialVideoType will include editorial_video_type in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withEditorialVideoType("raw").execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withEntityUris will include entity_uris in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withEntityUris(["123", "456"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withExcludeNudity will include exclude_nudity in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withExcludeNudity().execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withResponseField will include fields in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withResponseField(["asset_family", "id"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withFormatAvailable will include format_available in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withFormatAvailable("hd").execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withFrameRate will include frame_rates in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withFrameRate(["24", "29.97"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withKeywordId will include keyword_ids in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withKeywordId([1234, 5678]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withPage will include page in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withPage(3).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withPageSize will include page_size in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withPageSize(50).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withProductType will include product_types in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withProductType(["easyaccess", "editorialsubscription"]).execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withSortOrder will include sort_order in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withSortOrder("newest").execute((err, response) => {
    }));
});

test.cb("SearchVideosEditorial: withSpecificPeople will include specific_people in query", t => {  
    var client = new Api({ apiKey: "apikey", apiSecret: "apisecret" }, null);
     t.end(client.searchvideoseditorial().withPhrase("cat").withSpecificPeople("reggie jackson").execute((err, response) => {
    }));
});
