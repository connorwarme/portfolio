import ToolUnit from './ToolUnit'
import CardImage from './CardImage'
import { VscTools } from 'react-icons/vsc'
import { VscFoldDown, VscFoldUp } from 'react-icons/vsc'
import { HiOutlineExternalLink as LinkIcon } from 'react-icons/hi'

const Card = ({ item, selection, handleSelection }) => {
  // need to change ToolUnit so that I can pass in the styling needed

  return (
    <>
      {item && item.title && (
        <div className="m-2 rounded-md bg-midnight-green/75 p-2 font-play max-w-sm flex flex-col justify-between md:self-stretch md:max-w-lg lg:max-w-2xl">
          <div className="mb-2 flex justify-center">
            <a
              className="w-inherit "
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="text-2xl font-bold text-wave-spray transition duration-150 ease-in-out hover:underline">
                {item.title}
              </h3>
            </a>
          </div>
          <CardImage item={item} />
          <ul className="m-1 ml-4 flex items-center justify-center">
            <span className="mr-2 flex items-center">
              <VscTools className="h-6 w-6 text-wave-spray" />
              <span className="ml-1">:</span>
            </span>
            {item.tools.map((tool, index) => (
              <ToolUnit key={index} unit={tool} />
            ))}
          </ul>
          <div className="has-[div.expand]:duration-1000ms max-h-0 transition-[max-height] duration-500 ease-in-out has-[div.expand]:max-h-[300px]">
            <div className="opacity-0 transition-opacity delay-150 duration-300 has-[div.expand]:opacity-100">
              {selection === item.id ? (
                <div className="expand md:ml-28 lg:ml-48">
                  <ul className="transition-all delay-300 duration-300 ease-in-out">
                    {item.points.map((point, index) => {
                      return (
                        <div key={index} className="flex items-center">
                          <item.bullet
                            className="mr-2"
                            style={{ height: '16px', width: '16px' }}
                          />
                          <li>{point}</li>
                        </div>
                      )
                    })}
                    <div className="flex items-center">
                      <LinkIcon
                        className="mr-2"
                        style={{ height: '16px', width: '16px' }}
                      />
                      <li>
                        <a
                          href={item.repo_url}
                          className="hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View repository
                        </a>
                      </li>
                    </div>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="btn-ex m-2 rounded-sm border-2 border-wave-spray p-2 px-4 font-semibold tracking-wide text-wave-spray active:left-[1px] active:top-[2px] active:shadow-none md:text-lg md:h-14 md:px-5 lg:text-xl lg:h-16 lg:px-6"
              onClick={() => handleSelection(item.id)}
            >
              {selection === item.id ? (
                <div className="flex items-center">
                  <span>Minimize</span>
                  <VscFoldUp className="ml-2 text-wave-spray" />
                </div>
              ) : (
                <div className="flex items-center">
                  <span>See More</span>
                  <VscFoldDown className="ml-2 text-wave-spray" />
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
