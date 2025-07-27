import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Edit = ({ attributes, setAttributes }) => {
    const { questions } = attributes;
    const blockProps = useBlockProps();
    const [currentQuestion, setCurrentQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');

    const addQuestion = () => {
        setAttributes({
            questions: [...questions, { question: currentQuestion, answer: currentAnswer }],
        });
        setCurrentQuestion('');
        setCurrentAnswer('');
    };

    const updateQuestion = (value, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].question = value;
        setAttributes({ questions: updatedQuestions });
    };

    const updateAnswer = (value, index) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index].answer = value;
        setAttributes({ questions: updatedQuestions });
    };

    const removeQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setAttributes({ questions: updatedQuestions });
    };

    return (
        <div {...blockProps}>
            <div className="faq-editor">
                {questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <RichText
                            tagName="h4"
                            value={item.question}
                            onChange={(value) => updateQuestion(value, index)}
                            placeholder="Enter question..."
                            className="faq-question"
                        />
                        <RichText
                            tagName="p"
                            value={item.answer}
                            onChange={(value) => updateAnswer(value, index)}
                            placeholder="Enter answer..."
                            className="faq-answer"
                        />
                        <Button
                            isDestructive
                            onClick={() => removeQuestion(index)}
                        >
                            Remove
                        </Button>
                    </div>
                ))}
                <div className="faq-new">
                    <RichText
                        tagName="h4"
                        value={currentQuestion}
                        onChange={(value) => setCurrentQuestion(value)}
                        placeholder="New question..."
                    />
                    <RichText
                        tagName="p"
                        value={currentAnswer}
                        onChange={(value) => setCurrentAnswer(value)}
                        placeholder="New answer..."
                    />
                    <Button isPrimary onClick={addQuestion}>
                        Add FAQ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Edit;
