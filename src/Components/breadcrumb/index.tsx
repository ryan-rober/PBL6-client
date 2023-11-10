import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb as BC } from 'antd'

const Breadcrumb = ({ data, onSelectItem }: any) => (
  <BC separator="">
    <BC.Item href="" onClick={() => onSelectItem()}>/</BC.Item>
    {data?.map((item: any, index: number) => (
      <Fragment key={item.key}>
        {index > 0 && <BC.Separator />}
        {(index < data.length - 1) ? <BC.Item href="" onClick={() => onSelectItem(item)}>{item.text}</BC.Item>
          : <BC.Item>{item.text}</BC.Item>}
      </Fragment>
    ))}
  </BC>
)

Breadcrumb.propTypes = {
  data: PropTypes.array,
  onSelectItem: PropTypes.func
}

export default Breadcrumb
