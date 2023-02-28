import { joinClasses } from "../../commands"

export const Divider = ({ type = "vertical", className = "" }) => {
  const DIVIDER_DICT = {
    vertical: (
      <div className={joinClasses(["bg-slate-700 w-0.5 text-2xl text-transparent rounded", className])}>
        |
      </div>
    ),
    horizontal: (
      <div className={joinClasses(["bg-slate-700 w-full text-[1px] text-transparent rounded", className])}>
        |
      </div>
    )
  }
  return DIVIDER_DICT[type]
}
