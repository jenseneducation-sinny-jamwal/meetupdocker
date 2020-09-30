import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
    test('find the tag with "homepage"', () => {
        const wrapper = shallowMount(About);
        const msg = 'About US';

        const element = wrapper.find('h1').text();

        expect(element).toBe(msg);
    })
})