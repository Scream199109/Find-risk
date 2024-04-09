import AnswerBlock from "src/entities/AnswerBlock/ui/AnswerBlock";
import TestTypeBlock from "src/entities/TestTypeBlock/ui/TestTypeBlock";
import Header from "src/widgets/Header/ui/Header";


function App() {

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <TestTypeBlock />
        <AnswerBlock src="start-image.jpg" alt='баннер'>

        </AnswerBlock>
      </main>
    </div >
  )
}

export default App
