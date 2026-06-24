import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseEffectExample2 from './UseEffectExample2';
import RegisterFunctional from '../RegisterFunctional';
import RegisterClass from '../RegisterClass';
import WithoutContext from './WithoutContext';
import WithContext from './WithContext';
import UnControlledExample from './UnControlledExample';
import UseReducerExample from './UseReducerExample';

function HooksExample() {
    return (<>
        <h1>Hooks Example</h1>
        <UseReducerExample />
        <UnControlledExample />
        <WithoutContext />
        <WithContext />
        <RegisterClass />
        <RegisterFunctional />
        <UseEffectExample2 />
        <UseStateExample />
        <UseEffectExample />
    </>);
}

export default HooksExample;