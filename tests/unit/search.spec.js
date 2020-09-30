import { shallowMount } from '@vue/test-utils';
import MeetupList from '@/views/MeetupList.vue';

describe('MeetupList.vue', () => {

  let wrapper, data;
  beforeEach(() => {
    data = [{
              "id": 1,
              "title": "Meetup for Kids",
              "Address": "12 sveavagen",
              "Date": "2020-10-20",
              "image": "meet1"
            },
            {
              "id": 2,
              "title": "Meetup for Food Lovers",
              "Address": "12 sveavagen",
              "Date": "2020-11-20",
              "image": "meet2"
            },
            {
              "id": 3,
              "title": "Meetup for Arts",
              "Address": "12 sveavagen",
              "image": "meet3",
              "Date": "2020-10-20"
            },
            {
              "id": 4,
              "title": "Meetup for Techies",
              "Address": "12 sveavagen",
              "image": "meet4",
              "Date": "2020-11-12"
            },
            {
              "id": 5,
              "title": "Meetup for dancers",
              "Address": "12 sveavagen",
              "image": "meet5",
              "Date": "2020-11-11"
            },
            {
              "id": 6,
              "title": "Meetup for Yoga",
              "Address": "12 sveavagen",
              "image": "meet1",
              "Date": "2020-11-12"
            
             }]

    wrapper = shallowMount(MeetupList, {
      data: () => ({
        meetups: data
      })

    });
  })

  it('should have empty string show all elements', () => {
    let elementCount = wrapper.findAll('ul > li').length;
    expect(elementCount).toBe(data.length)
  })

  it('should have "f" show "food" and "flowers" ', async () => {

    const input = wrapper.find('input')
    await input.setValue('food')

    let results = wrapper.findAll('.meetup-title').wrappers;
    console.log(results);
    let hasFood= results.some(h1 => h1.text() === 'Meetup for Food Lovers')
    console.log(hasFood)
   
    expect(hasFood).toBe(true)
    expect(results.length).toBe(1)
  })
})
