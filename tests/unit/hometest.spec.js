import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home', () => {
    test('find the tag with "Welcome to the MEETUPs"', () => {
        const wrapper = shallowMount(Home)
        const h1 = 'Welcome to the MEETUPs'

        const element = wrapper.find('h1').text()

        expect(element).toBe(h1)

    })

    test('find there is an image src', () => {
        const wrapper = shallowMount(Home)
        const elements = wrapper.find('img')
        expect(elements.contains('img')).toBe(true)
    })
})