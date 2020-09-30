import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import Create from "@/views/Create.vue"
import MeetupList from '@/views/MeetupList.vue'
import routes from "@/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
     it("renders a child component via routing", async () => {
        const router = new VueRouter({ routes })
          const wrapper = mount(App, {
             localVue,
               router
    })

    router.push("/Meetuplist")
      await wrapper.vm.$nextTick()


        expect(wrapper.findComponent(MeetupList).exists()).toBe(true)
  })


  it("renders a child component via routing", async () => {
       const router = new VueRouter({ routes })
         const wrapper = mount(App, {
           localVue,
             router
    })

    router.push("/create")
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Create).exists()).toBe(true)
  })
})