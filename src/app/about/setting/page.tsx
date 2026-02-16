import Counter from '@/components/Counter';

const SettingPage = () => {
    console.log("SERVER PAGE");
    return (
      <div className="flex flex-col gap-4">
        <h1>Hello SettingPage</h1>
        <Counter />
      </div>
    );
}

export default SettingPage
