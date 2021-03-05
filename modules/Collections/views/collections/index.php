<kiss-container class="kiss-margin-large">

    <vue-view>
        <template>

            <app-loader class="kiss-margin-large" v-if="loading"></app-loader>

            <div class="animated fadeIn kiss-height-30vh kiss-flex kiss-flex-middle kiss-flex-center kiss-align-center kiss-color-muted kiss-margin-large" v-if="!loading && !collections.length">
                <div>
                    <kiss-svg src="<?=$this->base('collections:icon.svg')?>" width="40" height="40"></kiss-svg>
                    <p class="kiss-size-large kiss-text-bold kiss-margin-top"><?=t('No collections')?></p>
                </div>
            </div>

            <div class="kiss-margin-large" v-if="!loading && collections.length">

                <kiss-row class="kiss-child-width-1-2 kiss-child-width-1-4@m kiss-child-width-1-5@l" v-if="mode=='grid'">

                    <div v-for="collection in collections">
                        <kiss-card class="animated fadeIn kiss-position-relative" theme="bordered" hover="shadow">

                            <div class="kiss-padding">

                                <div class="kiss-position-relative">
                                    <canvas width="600" height="450"></canvas>
                                    <div class="kiss-cover kiss-flex kiss-flex-middle kiss-flex-center kiss-align-center kiss-padding">
                                        <div>
                                            <div :style="{color: collection.color || 'inherit' }">
                                                <kiss-svg class="kiss-margin-auto" src="<?=$this->base('collections:icon.svg')?>" width="60" height="60"></kiss-svg>
                                            </div>
                                            <div class="kiss-padding kiss-margin-top kiss-text-truncate">
                                                <strong>{{ collection.label || collection.name }}</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <a class="kiss-cover" :href="$route(`/collections/entries/list/${collection.name}`)"></a>
                                </div>

                                <div class="kiss-align-center">
                                    <kiss-dropdown class="kiss-display-inline-block">
                                        <a><icon>more_horiz</icon></a>
                                        <kiss-dropdownbox class="kiss-align-left" pos="center">
                                            <kiss-navlist>
                                                <ul>
                                                    <li class="kiss-nav-header">{{ collection.label || collection.name }}</li>
                                                    <li><a :href="$route(`/collections/edit/${collection.name}`)"><?=t('Edit')?></a></li>
                                                    <li class="kiss-nav-divider"></li>
                                                    <a class="kiss-color-danger" @click="remove(collection)"><?=t('Delete')?></a>
                                                </ul>
                                            </navlist>
                                        </kiss-dropdownbox>
                                    </kiss-dropdown>
                                </div>

                            </div>

                        </kiss-card>
                    </div>

                </kiss-row>

                <div v-if="mode=='list'">

                    <div class="kiss-margin-small" v-for="collection in collections">
                        <kiss-card class="animated fadeIn" theme="bordered" hover="shadow">
                            <div class="kiss-padding-small kiss-flex kiss-flex-middle">
                                <div class="kiss-margin-small-right" :style="{color: collection.color || 'inherit' }">
                                    <kiss-svg class="kiss-margin-auto" src="<?=$this->base('collections:icon.svg')?>" width="25" height="25"></kiss-svg>
                                </div>
                                <div class="kiss-flex-1"><a class="kiss-link-muted"><a class="kiss-link-muted" :href="$route(`/collections/entries/list/${collection.name}`)"><strong>{{ collection.label || collection.name }}</strong></a></div>
                                <div>
                                    <kiss-dropdown>
                                        <a><icon>menu</icon></a>
                                        <kiss-dropdownbox pos="aside-left">
                                            <kiss-navlist>
                                                <ul>
                                                    <li class="kiss-nav-header">{{ collection.label || collection.name }}</li>
                                                    <li><a :href="$route(`/collections/edit/${collection.name}`)"><?=t('Edit')?></a></li>
                                                    <li class="kiss-nav-divider"></li>
                                                    <a class="kiss-color-danger" @click="remove(collection)"><?=t('Delete')?></a>
                                                </ul>
                                            </navlist>
                                        </kiss-dropdownbox>
                                    </kiss-dropdown>
                                </div>
                            </div>
                        </kiss-card>
                    </div>

                </div>

            </div>


            <app-actionbar>

                <kiss-container>
                    <div class="kiss-flex kiss-flex-middle">
                        <div class="kiss-button-group">
                            <button class="kiss-button" :class="{'kiss-button-primary': (mode=='list')}" @click="mode='list'"><icon>list</icon></button>
                            <button class="kiss-button" :class="{'kiss-button-primary': (mode=='grid')}" @click="mode='grid'"><icon>view_comfy</icon></button>
                        </div>
                        <div class="kiss-flex-1"></div>
                        <a class="kiss-button kiss-button-primary" href="<?=$this->route('/collections/create')?>"><?=t('Add collection')?></a>
                    </div>
                </kiss-container>

            </app-actionbar>


        </template>

        <script type="module">

            export default {
                data() {
                    return {
                        collections: [],
                        mode: 'grid',
                        loading: false
                    }
                },

                mounted() {
                    this.load();
                },

                methods: {

                    load() {

                        this.loading = true;

                        this.$request('/collections/load').then(collections => {
                            this.collections = collections;
                            this.loading = false;
                        })
                    },

                    remove(collection) {

                        App.ui.confirm('Are you sure?', () => {

                            this.$request(`/collections/remove/${collection.name}`, {}).then(res => {
                                this.collections.splice(this.collections.indexOf(collection), 1);
                            });
                        });
                    }
                }
            }
        </script>

    </vue-view>


</kiss-container>