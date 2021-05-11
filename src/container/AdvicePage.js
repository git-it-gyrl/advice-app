import React from 'react';
import Header from './Header'
import AdviceContainer from './AdviceContainer'


const url = 'https://type.fit/api/quotes'


class AdvicePage extends React.Component {
    state = {
        advice: [],
        // rendered advice
    };

    componentDidMount() {
        fetch(url)
            .then(res => res.json())
            // .then(advice => console.log(advice))
            .then(advice => this.setState({ advice: advice }))
    }

    // create function
    addAdvice = () => {
        console.log(this.advice)
    }

    // delete function
    removeAdvice = () => {
        this.setState({

        })
    }
    render() {
        return (
            <div>
                <header>
                Advice App
                </header>
                <AdviceContainer />
                <Header />


                <p>Welcome</p>

            </div>

        );
    }
}
export default AdvicePage;