import { createApp } from 'vue';

import App from '@/App';
import BaseCard from '@/components/UI/BaseCard';
import BaseButton from '@/components/UI/BaseButton';
import BaseDialogue from '@/components/UI/BaseDialogue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialogue', BaseDialogue);

app.mount('#app');
