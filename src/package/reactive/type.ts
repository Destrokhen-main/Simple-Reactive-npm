enum ProxyType {
  Proxy = "Proxy",
  RefL = "RefL",
  Ref = "Ref",
  RefF = "RefF",
  RefC = "RefC",
  Watch = "Watch",
  RefO = "RefO",
  RefA = "RefA",
  Effect = "Effect",
}

enum PropsStartType {
  Static = "Static",
  Function = "Function",
  None = "None",
}

type RefLProxy = {
  parent: Array<any>;
  value: HTMLElement | null;
  type: ProxyType;
  proxyType: ProxyType;
};

type RefProxy = {
  parent: Array<any>;
  value: string | number | (() => any);
  type: ProxyType;
  proxyType: ProxyType;
  startType: PropsStartType;
};

type RefCProxy = {
  parent: Array<any>;
  value: () => any;
  type: ProxyType;
  proxyType: ProxyType;
};

type RefOProxy = {
  $parent: Array<any>;
  type: ProxyType;
  proxyType: ProxyType;
};

export { ProxyType, RefLProxy, RefProxy, PropsStartType, RefCProxy, RefOProxy };
