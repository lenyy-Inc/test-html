tabs = self.parent.parent.parent.getChild("TabContainer").props.tabs
tabs.append("New Tab " + str(len(tabs)) )
self.parent.parent.parent.getChild("TabContainer").props.tabs = tabs
self.parent.parent.parent.getChild("TabContainer").props.currentTabIndex = len(tabs) - 1