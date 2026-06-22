import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseEffectExample2 from './UseEffectExample2';
import RegisterFunctional from '../RegisterFunctional';

function HooksExample() {
    return (<>
        <h1>Hooks Example</h1>
        <RegisterFunctional />
        <UseEffectExample2 />
        <UseStateExample />
        <UseEffectExample />
    </>);
}

export default HooksExample;