import EventEmitter from 'events';

class SkyEventBus extends EventEmitter {

}
const EventBus = new SkyEventBus();
export default EventBus;

