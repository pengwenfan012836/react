import React, {
	Component,
	PropTypes
} from 'react';
import Commet from "./Commet"
import {
	connect
} from 'react-redux';
import {
	init_item
} from '../reducers/reducers'
class ContainerHome extends Component {
	constructor(props) {
		super(props)

	}
	componentWillMount() {
		this._getContents();
	}
	_getContents() {
		// if (localStorage.getItem('contents')) {
		// 	const contents = JSON.parse(localStorage.getItem('contents'))
		// 	if (this.props.init_item) {
		// 		this.props.init_item(contents)


		// }
		const contents = localStorage.getItem('contents') ? JSON.parse(localStorage.getItem('contents')) : []
		
		this.props.init_item(contents)
	}
	render() {

		// const contents = this.props.contents ? this.props.contents : []

		return (
			// <div>{
			// 	contents.map((content,i)=>{
			// 		<Commet 
			// 		getContent={content}
			// 		key={i}/>
			// 	})		

			// }	
			<div>
				ContainerHome
			</div>
		)
	}
}

ContainerHome.propTypes = {
	contents: PropTypes.array,
}
const mapStateToProps = (state) => {
	return {
		contents: state.contents
	}
}
const mapDispatchToProps = (dispatch) => {
		return {
			init_item: (contents) => {
				dispatch(init_item(contents))
			}
		}
	}
	// export default ContainerHome
export default connect(mapStateToProps, mapDispatchToProps)(ContainerHome)