import "./assets/styles";
import "reflect-metadata";
import { Configuration, getConfiguration } from "./common/configuration";
import GiphInfo from "./components/GiphDetails/GiphInfo/GiphInfo.vue";
import GiphImage from "./components/GiphSearch/GiphImage/GiphImage.vue";
import GiphList from "./components/GiphSearch/GiphList/GiphList.vue";
import GiphPager from "./components/GiphSearch/GiphPager/GiphPager.vue";
import GiphSearchBox from "./components/GiphSearch/GiphSearchBox/GiphSearchBox.vue";
import App from "./pages/App/App.vue";
import { ClipboardManager } from "./services/clipboard/ClipboardManager";
import { IClipboardManager } from "./services/clipboard/IClipboardManager";
import { GiphyApiClient } from "./services/giphy/GiphyApiClient";
import { IGiphyApiClient } from "./services/giphy/IGiphyApiClient";
import { IRoutingManager } from "./services/router/IRoutingManager";
import router from "./services/router/routing";
import { RoutingManager } from "./services/router/RoutingManager";
import { ISlackManager } from "./services/slack/ISlackManager";
import { SlackManager } from "./services/slack/SlackManager";
import { IStateManager } from "./services/state/IStateManager";
import { StateManager } from "./services/state/stateManager";
import { store } from "./services/state/store";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { IonActionSheet, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonicVue, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, IonVirtualScroll } from "@ionic/vue";
import { cid, container } from "inversify-props";
import { createApp } from "vue";
import VueLoadImage from "vue-load-image";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";

// configuration
const configuration: Configuration = getConfiguration();

// configure dependency injection
container.bind<IGiphyApiClient>(cid.IGiphyApiClient).toConstantValue(new GiphyApiClient(configuration.giphy.apiBaseUrl, configuration.giphy.apiKey));
container.bind<ISlackManager>(cid.ISlackManager).toConstantValue(new SlackManager(configuration.slack.teamId, configuration.slack.channelId));
container.bind<IStateManager>(cid.IStateManager).toConstantValue(new StateManager(store));
container.bind<IRoutingManager>(cid.IRoutingManager).toConstantValue(new RoutingManager(router));
container.addSingleton<IClipboardManager>(ClipboardManager, cid.IClipboardManager);

// configure application
const app = createApp(App);

// register ionic components
app.component("ion-action-sheet", IonActionSheet);
app.component("ion-back-button", IonBackButton);
app.component("ion-button", IonButton);
app.component("ion-buttons", IonButtons);
app.component("ion-card", IonCard);
app.component("ion-card-content", IonCardContent);
app.component("ion-card-header", IonCardHeader);
app.component("ion-card-subtitle", IonCardSubtitle);
app.component("ion-card-title", IonCardTitle);
app.component("ion-content", IonContent);
app.component("ion-col", IonCol);
app.component("ion-footer", IonFooter);
app.component("ion-grid", IonGrid);
app.component("ion-header", IonHeader);
app.component("ion-icon", IonIcon);
app.component("ion-infinite-scroll", IonInfiniteScroll);
app.component("ion-infinite-scroll-content", IonInfiniteScrollContent);
app.component("ion-input", IonInput);
app.component("ion-label", IonLabel);
app.component("ion-item", IonItem);
app.component("ion-list", IonList);
app.component("ion-page", IonPage);
app.component("ion-row", IonRow);
app.component("ion-searchbar", IonSearchbar);
app.component("ion-title", IonTitle);
app.component("ion-toolbar", IonToolbar);
app.component("ion-virtual-scroll", IonVirtualScroll);

app.component("dynamic-virtual-scroller", DynamicScroller);
app.component("dynamic-virtual-scroller-item", DynamicScrollerItem);

app.component("vue-load-image", VueLoadImage);

// register custom components
app.component("giph-search-box", GiphSearchBox);
app.component("giph-list", GiphList);
app.component("giph-image", GiphImage);
app.component("giph-pager", GiphPager);

app.component("giph-info", GiphInfo);

// register plugins
app.use(IonicVue);
app.use(router);

// run application
router.isReady().then(() => app.mount("#app"));

defineCustomElements(window);
