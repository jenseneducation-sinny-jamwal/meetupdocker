import { shallowMount } from '@vue/test-utils';
import MeetupList from '@/views/MeetupList.vue';


jest.mock('axios', () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
    
}));

describe('meetups', () => {
    test('mocking the axios call to get products shuold work', async () => {
        const wrapper = shallowMount(MeetupList);
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.meetups.length).toBe(1);
    })
})