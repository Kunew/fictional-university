import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { questions } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} className="interactive-faq">
            {questions.map((item, index) => (
                <div key={index} className="faq-item">
                    <RichText.Content tagName="h4" value={item.question} className="faq-question" />
                    <RichText.Content tagName="p" value={item.answer} className="faq-answer" />
                </div>
            ))}
        </div>
    );
};

export default Save;
