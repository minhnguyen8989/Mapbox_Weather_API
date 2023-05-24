describe('MapBox API key', function() {
    it('is mapBox API key ready', function() {
        expect(mapBoxAPI()).toBe(test_key_mapbox);
    });
});
describe('Weather API key', function() {
    it('is Weather API key ready', function() {
        expect(weatherAPI()).toBe(test_key_weather);
    });
});