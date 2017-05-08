// type类型
const ADD_ITEM = 'add_item';
const DEL_ITEM = 'del_item';
const INIT_ITEM = 'init_item';

// redurecs
export default function(state, action) {
	if (!state) {
		return {
			contents: []
		}
		switch (action.type) {
			case ADD_ITEM:
				return {
					contents: [...state.contents, action.content]
				}
			case DEL_ITEM:
				const newContents = [...state.contents.slice(0, itemIndex), ...state.contents.slice(itemIndex + 1)]
				return {
					contents: newContents
				}
			case INIT_ITEM:
				return {
					contents: [...state.contents]
				}
			default:
				return state

		}
	}
}

// action创造函数

export function add_item(content) {
	return {
		type: ADD_ITEM,
		content: content
	}
}

export function del_item(itemIndex) {
	return {
		type: DEL_ITEM,
		itemIndex: itemIndex
	}
}

export function init_item(contents) {
	return {
		type: INIT_ITEM,
		contents: contents
	}
}