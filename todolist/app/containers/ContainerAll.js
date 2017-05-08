import React, {
	Component,
	PropTypes
} from 'react';
import NavLink from './Navlink';
import {
	connect
} from 'react-redux';
import {
	add_item
} from '../reducers/reducers'
class ContainerAll extends Component {

	onSubmitContents() {
		const content = this.refs.content.value;
		if (!content) return alert('请输入内容')
		if (content.length > 20) return alert('请输入不超过20的字符')

		const contents = localStorage.getItem('contents') ? JSON.parse(localStorage.getItem('contents')) : [];
		contents.push(content)
			// 添加content	
		localStorage.setItem('contents', JSON.stringify(contents));
		if (this.props.add_item) {
			this.props.add_item(content)
		}

	}
	render() {
		return (
			<div className='withborder'>
				<ul className="beiwang">
					<li className='memorandum'>备忘</li>
					<li><input 
					ref='content'
					placeholder="新建事项(20字以内)" className='submit' /></li>
					<li className='add'>
					<button onClick={this.onSubmitContents.bind(this)}>添加</button>
					<button>搜索</button>
					</li>
					
				</ul>
				<div className="clear"></div>
				 <ul role='nav' className="linklItems">
						<li><NavLink to="/" onlyActiveOnIndex={true}>全部</NavLink></li>
						<li><NavLink to="/newitem" >新建事项</NavLink></li>
						<li><NavLink to="/doimg" >正在进行</NavLink></li>
						<li><NavLink to="/did" >已完成</NavLink></li>
				</ul>
				<div className="clear"></div>
				{this.props.children}

			</div>
		)
	}
}
ContainerAll.propTypes = {
	contents: PropTypes.array,
}
const mapStateToProps = (state) => {
	return {
		contents: state.contents
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		add_item: (content) => {
			dispatch(add_item(content))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerAll)