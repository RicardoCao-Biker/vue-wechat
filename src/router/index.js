import Vue from 'vue';
import Router from 'vue-router';
import vcontact from '../components/vcontact.vue';
import vexplore from '../components/vexplore.vue';
import vdialogue from '../components/vdialogue.vue';
import vme from '../components/vme.vue';
import myprofile from'../components/pages/myprofile.vue';
import personalheader from '../components/pages/personalheader.vue';
import myqr from '../components/pages/myqr.vue';
import settings from '../components/pages/settings.vue';
import details from '../components/pages/details.vue';
import moments from '../components/pages/moments.vue';
import albums from '../components/pages/albums.vue';
import photo from '../components/pages/photo.vue';
import chatview from '../components/pages/chatview.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/vcontact',
     component: vcontact,
     meta:{
        title:'联系人'
     }
    },
    {
     path: '/vexplore',
     component: vexplore,
     meta:{
        title:'发现'
     }
    },
    {
     path: '/',
     component: vdialogue,
     meta:{
        title:'微信'
     }
    },
    {
     path: '/vdialogue',
     component: vdialogue,
     meta:{
        title:'微信'
     }
    },
    {
     path: '/vme',
     component: vme,
     meta:{
        title:'我'
     }
    },
    {
     path: '/myprofile',
     component: myprofile,
     meta:{
        title:'个人信息'
        }
    },
    {
     path: '/personalheader',
     component: personalheader,
     meta:{
        title:'个人头像'
        }
    },
    {
     path: '/myqr',
     component: myqr,
     meta:{
        title:'我的二维码'
        }
    },
    {
     path: '/settings',
     component: settings,
     meta:{
        title:'设置'
        }
    },
    {
     path: '/details',
     component: details,
     meta:{
        title:'详细资料'
        }
    },
    {
     path: '/moments',
     component: moments,
     meta:{
        title:'朋友圈'
        }
    },
    {
     path: '/albums',
     component: albums,
     meta:{
        title:'相册'
        }
    },
    {
     path: '/photo',
     component: photo,
     meta:{
        title:'照片'
        }
    },
    {
     path: '/chatview',
     component: chatview,
     meta:{
        title:''
        }
    }
  ]
})
