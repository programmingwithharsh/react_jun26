import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseEffectExample2 from './UseEffectExample2';
import RegisterFunctional from '../RegisterFunctional';
import RegisterClass from '../RegisterClass';

function HooksExample() {
    return (<>
        <h1>Hooks Example</h1>
        <RegisterClass />
        <RegisterFunctional />
        <UseEffectExample2 />
        <UseStateExample />
        <UseEffectExample />
    </>);
}

export default HooksExample;