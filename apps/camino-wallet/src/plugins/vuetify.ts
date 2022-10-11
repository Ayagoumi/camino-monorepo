import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faDollarSign,
    faTimesCircle,
    faSignOutAlt,
    faSignInAlt,
    faCaretDown,
    faHistory,
    faGlobe,
    faExchangeAlt,
    faDna,
    faCamera,
    faDownload,
    faCheckCircle,
    faTimes,
    faPlus,
    faMinus,
    faSync,
    faExclamationTriangle,
    faPrint,
    faQrcode,
    faCopy,
    faKey,
    faFileExcel,
    faList,
    faTrash,
    faUpload,
    faCreditCard,
    faArrowRight,
    faArrowLeft,
    faTint,
    faChevronDown,
    faBars,
    faCog,
    faSearch,
    faListOl,
    faSpinner,
    faInfoCircle,
    faLink,
    faQuoteRight,
    faLock,
    faUnlock,
    faEye,
    faEyeSlash,
    faQuestionCircle,
    faUsers,
    faFilter,
    faFont,
    faBoxes,
    faRandom,
    faCheckSquare,
    faAngleLeft,
    faAngleRight,
    faExpand,
    faShare,
    faVideo,
    faUnlink,
    faFileCsv,
} from '@fortawesome/free-solid-svg-icons'

import { faBtc, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faDollarSign,
    faBtc,
    faTimesCircle,
    faSignOutAlt,
    faSignInAlt,
    faCaretDown,
    faHistory,
    faGlobe,
    faExchangeAlt,
    faDna,
    faCamera,
    faDownload,
    faCheckCircle,
    faCheckSquare,
    faTimes,
    faPlus,
    faMinus,
    faSync,
    faExclamationTriangle,
    faPrint,
    faQrcode,
    faCopy,
    faKey,
    faFileExcel,
    faList,
    faTrash,
    faUpload,
    faCreditCard,
    faArrowRight,
    faArrowLeft,
    faTint,
    faChevronDown,
    faBars,
    faCog,
    faSearch,
    faListOl,
    faGoogle,
    faSpinner,
    faInfoCircle,
    faLink,
    faQuoteRight,
    faLock,
    faEye,
    faEyeSlash,
    faQuestionCircle,
    faUsers,
    faFilter,
    faFont,
    faBoxes,
    faUnlock,
    faRandom,
    faAngleLeft,
    faAngleRight,
    faExpand,
    faShare,
    faVideo,
    faUnlink,
    faFileCsv
)

Vue.component('fa', FontAwesomeIcon)

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#42b983',
                secondary: '#06f',
                accent: '#82B1FF',
                error: '#ff9090',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#ecce73',
            },
        },
    },
    icons: {
        iconfont: 'mdiSvg',
    },
})
