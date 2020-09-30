import { shallowMount } from '@vue/test-utils';
import MeetupList from '@/views/MeetupList.vue';

describe('MeetupList.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MeetupList);
    })

    it('renders the text "Meetups"', () => {
        const msg = 'Meetups';
        const textMessage = wrapper.find('h1').text();
        expect(textMessage).toBe(msg);

    })
})
