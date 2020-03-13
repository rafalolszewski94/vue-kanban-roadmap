<template>
  <div class="wrapper">
    <div class="sidebar">
      <div class="sidebar-icons">
        <div class="header">
          <a class="menu-icon sidebar-icon" href="#">
            <MenuIcon />
          </a>
        </div>
        <ul class="icons">
          <li>
            <a href="#" class="sidebar-icon">
              <DashboardIcon />
            </a>
          </li>
          <li>
            <a href="#" class="sidebar-icon active">
              <PeopleIcon />
            </a>
          </li>
          <li>
            <a href="#" class="sidebar-icon">
              <TimeIcon />
            </a>
          </li>
          <li>
            <a href="#" class="sidebar-icon">
              <StackIcon class="h-3 w-3" />
            </a>
          </li>
          <li>
            <a href="#" class="sidebar-icon">
              <ChatIcon />
            </a>
          </li>
        </ul>
      </div>

      <div class="sidebar-menu">
        <div class="header">
          <div class="search">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div class="content">
          <div class="flex justify-between items-center">
            <h3>Teams</h3>
            <button
              class="rounded-full h-8 w-8 bg-teal-600 text-white inline-flex justify-center items-center hover:bg-teal-700 transition ease-in-out duration-150"
            >
              <fa-icon :icon="['fas', 'plus']" class="h-4 w-4" />
            </button>
            <button
              class="back-nav-icon rounded-full h-8 w-8 bg-white hover:bg-gray-200 hover:border-gray-400 hover:text-gray-600 border border-gray-300 text-gray-500 inline-flex justify-center items-center transition ease-in-out duration-150"
            >
              <fa-icon :icon="['fas', 'arrow-left']" class="h-4 w-4" />
            </button>
          </div>

          <div class="mt-4">
            <h6 class="text-xs font-semibold text-gray-500 tracking-wider">
              Favorites 6
            </h6>

            <ul class="team-list">
              <li v-for="(team, idx) in teams" :key="idx">
                <a
                  href="#"
                  :class="{ active: isTeamActive(team) }"
                  @click.prevent
                >
                  <div class="icon">
                    <img v-if="team.icon" :src="team.icon" />
                  </div>
                  <div class="flex flex-col">
                    <h6
                      class="title"
                      :class="{ 'mb-1': team.products && team.products.length }"
                    >
                      {{ team.name }}
                    </h6>
                    <span
                      v-if="team.products && team.products.length"
                      class="products"
                    >
                      {{ team.products.length }} products
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <main>
      <div class="header px-12">
        <div class="flex flex-grow justify-between">
          <button class="button button-gray">
            <fa-icon :icon="['fas', 'arrow-left']" class="mr-1" />
            Back to product dashboard
          </button>

          <div class="flex items-center">
            <button class="button button-green mr-4">
              You have 12 new leads
            </button>

            <button class="user-button button button-white mr-4">
              <img
                src="https://eu.ui-avatars.com/api/?size=128&background=CEF2EF&color=49BCCA"
                class="rounded-full h-6 w-6"
              />
              <span>john@doeswidania.cc</span>
              <fa-icon
                :icon="['fas', 'ellipsis-h']"
                size="sm"
                class="text-gray-500 ml-3"
              />
            </button>
            <button class="user-button button button-white">
              <fa-icon
                :icon="['fas', 'bell']"
                size="sm"
                class="text-gray-500"
                fixed-width
              />
            </button>
          </div>
        </div>
      </div>

      <div class="content">
        <div class="flex justify-between px-12">
          <div class="flex">
            <span class="text-5xl -mt-3 mr-4">🚀</span>
            <div>
              <h3>Product roadmap</h3>
              <p class="text-xs text-gray-500 tracking-tight">
                Last edited by John Doe
              </p>
            </div>

            <div class="users-in-team ml-5">
              <ul class="flex">
                <li class="-mr-2 rounded-full border border-white">
                  <img
                    src="https://eu.ui-avatars.com/api/?size=128&background=CEF2EF&color=49BCCA"
                    class="rounded-full h-6 w-6"
                  />
                </li>
                <li class="-mr-2 rounded-full border border-white">
                  <img
                    src="https://eu.ui-avatars.com/api/?size=128&background=FBE3E4&color=CA666C"
                    class="rounded-full h-6 w-6"
                  />
                </li>
                <li class="-mr-2 rounded-full border border-white">
                  <img
                    src="https://eu.ui-avatars.com/api/?size=128&background=CEF2EF&color=49BCCA"
                    class="rounded-full h-6 w-6"
                  />
                </li>
                <li class="invite">
                  <a href="#" @click.prevent>
                    <fa-icon :icon="['fas', 'plus']" />
                    <span>Invite</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex items-center">
            <h6 class="label mr-2">View</h6>
            <div class="toggle-view">
              <div class="active">
                <fa-icon :icon="['fas', 'stream']" />
              </div>
              <div class="">
                <fa-icon :icon="['fas', 'list']" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-8 px-12">
          <ul class="actions">
            <li>
              <div class="action search">
                <SearchIcon />
                <input type="text" placeholder="Quick search..." />
              </div>
            </li>
            <li>
              <button class="action filter">
                <FilterIcon />
                <span>Filters</span>
              </button>
            </li>
            <li>
              <button class="action people">
                <PersonIcon />
                <span>People</span>
              </button>
            </li>
            <li>
              <button class="action transparent">
                <span>More</span>
              </button>
            </li>
          </ul>

          <ul>
            <li>
              <button class="button button-sm button-teal">
                <span>New</span>
                <fa-icon :icon="['fas', 'chevron-down']" class="ml-1" />
              </button>
            </li>
          </ul>
        </div>

        <div class="kanban">
          <client-only>
            <template v-for="(object, category) in kanban_lists">
              <draggable
                :key="category"
                v-model="object.items"
                class="kanban-list"
                group="kanban-cards"
                draggable=".kanban-card"
              >
                <div slot="header" class="kanban-list__header">
                  <div
                    class="tag tag-sm text-sm!"
                    :class="getKanbanHeaderClasses(category)"
                  >
                    {{ object.name }}
                  </div>

                  <ul class="actions">
                    <li>
                      <a href="#" title="More" @click.prevent>
                        <fa-icon :icon="['fas', 'ellipsis-h']" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Add" @click.prevent>
                        <fa-icon :icon="['fas', 'plus']" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  v-for="element in object.items"
                  :key="element.id"
                  class="kanban-card"
                >
                  <div v-if="element.image" class="kanban-card__image">
                    <img :src="element.image" :alt="element.name" />
                  </div>
                  <h6 class="kanban-card__title">{{ element.name }}</h6>
                  <div class="kanban-card__footer">
                    <div class="tags">
                      <div class="add-tag">
                        <fa-icon :icon="['fas', 'plus']" />
                        Tag
                      </div>
                    </div>

                    <div v-if="element.attachments" class="attachments">
                      <fa-icon :icon="['fas', 'paperclip']" />
                      {{ element.attachments.length }}
                    </div>
                  </div>
                </div>
              </draggable>
            </template>
          </client-only>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MenuIcon from '~/assets/img/ic-menu-24px.svg?inline'
import TimeIcon from '~/assets/img/ic-access-time-24px.svg?inline'
import DashboardIcon from '~/assets/img/ic-dashboard-24px.svg?inline'
import ChatIcon from '~/assets/img/message-chat-bubble-1-1.svg?inline'
import PeopleIcon from '~/assets/img/people.svg?inline'
import StackIcon from '~/assets/img/rectangle.svg?inline'
import SearchIcon from '~/assets/img/search.svg?inline'
import FilterIcon from '~/assets/img/ic-filter-list-24px.svg?inline'
import PersonIcon from '~/assets/img/person.svg?inline'

export default {
  components: {
    MenuIcon,
    TimeIcon,
    DashboardIcon,
    ChatIcon,
    PeopleIcon,
    StackIcon,
    SearchIcon,
    FilterIcon,
    PersonIcon
  },
  data() {
    return {
      teams: [
        { id: 1, name: 'Widelab', products: [{}, {}] },
        { id: 2, name: 'Washmen', products: [] },
        { id: 3, name: 'Activy', products: [{}, {}, {}, {}] }
      ],
      activeTeam: 'Washmen',
      kanban_lists: {
        backlog: {
          name: 'Backlog',
          items: [
            {
              id: 1,
              name: 'Product page structure',
              image: require('@/assets/img/sketch-mobile10.jpg'),
              attachments: [{}, {}],
              assignee: {
                avatar: null,
                first_name: 'Edward',
                last_name: 'Floyd'
              }
            },
            {
              id: 2,
              name: 'Marketing materials review',
              attachments: [{}, {}]
            }
          ]
        },
        todo: {
          name: 'To do',
          items: [
            {
              id: 3,
              name: 'Lorem pipsum'
            },
            {
              id: 4,
              name: 'Meeting with board members'
            }
          ]
        },
        active: {
          name: 'Active',
          items: [
            {
              id: 5,
              name: 'Lorem pipsum',
              image: require('@/assets/img/productly.png'),
              attachments: [{}, {}]
            },
            {
              id: 6,
              name: 'Meeting with board members'
            }
          ]
        },
        closed: {
          name: 'Closed',
          items: [
            {
              id: 7,
              name: 'Lorem pipsum'
            }
          ]
        }
      }
    }
  },
  methods: {
    getKanbanHeaderClasses(category) {
      return {
        'tag-gray': category === 'backlog' || category === 'closed',
        'tag-blue': category === 'todo',
        'tag-red': category === 'active'
      }
    },
    isTeamActive(team) {
      return team.name === this.activeTeam
    }
  }
}
</script>
