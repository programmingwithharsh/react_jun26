import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseEffectExample2 from './UseEffectExample2';
import RegisterFunctional from '../RegisterFunctional';
import RegisterClass from '../RegisterClass';
import WithoutContext from './WithoutContext';
import WithContext from './WithContext';
import UnControlledExample from './UnControlledExample';
import UseReducerExample from './UseReducerExample';
import UseCustomHookExample from './UseCustomHookExample';
import ObservableExample from './ObservableExample';
import ReactMemoExample from './ReactMemoExample';
import UseMemoExample from './UseMemoExample';
import UseCallbackExample from './UseCallbackExample';

function HooksExample() {
    return (<>
        <h1>Hooks Example</h1>
        <UseCallbackExample />
        <UseMemoExample />
        <ReactMemoExample />
        <UseCustomHookExample />
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