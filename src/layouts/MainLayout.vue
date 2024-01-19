<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="q-pt-sm q-pb-sm">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawerOpen"
        />

        <q-toolbar-title>
          <!-- <q-img src="static/luggage-icon.png" class="header-img"></q-img> -->
          <div class="brand"><q-avatar><img src="src/assets/site_imgs/luggage-icon.png" /></q-avatar> 
           App
          </div>
        </q-toolbar-title>

        <q-tabs class="gt-sm inline" align="right">
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/profile" label="Profile" />
        <q-route-tab to="/page3" label="About" />
      </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1'"
      >
        <q-scroll-area class="fit">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item :to="menuItem.to" clickable  v-ripple exact>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const menuList = [
{
    icon: 'forum',
    label: 'Social',
    separator: true,
    to: '/'
  },
  {
    icon: 'list',
    label: 'To-Dos',
    separator: false,
    to: '/tasks'
  },
  {
    icon: 'savings',
    label: 'Savings Goals',
    separator: false,
    to: '/'
  },
  {
    icon: 'collections',
    label: 'Gallery',
    separator: true,
    to: '/'
  },
  {
    icon: 'chat',
    label: 'Tribe',
    separator: true,
    to: '/'
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
    to: '/'
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    to: '/Help'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const drawer = ref(false)
    const loggedin = ref(false)

    return {
      drawer,
      menuList,
      toggleDrawerOpen () {
        drawer.value = !drawer.value
      }
    }
  }
})
</script>


<style lang="scss">
  .header-img{
    height: 100%;
    width: 10rem;
  }
</style>