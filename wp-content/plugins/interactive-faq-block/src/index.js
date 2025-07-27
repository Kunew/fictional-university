import { registerBlockType } from '@wordpress/blocks';
import './style.css';
import Edit from './edit';
import Save from './save';
import './accordion.js';

registerBlockType('interactive-faq/block', {
    title: 'Interactive FAQ',
    icon: 'editor-help',
    category: 'widgets',
    attributes: {
        questions: {
            type: 'array',
            default: [],
        },
    },
    edit: Edit,
    save: Save,
});